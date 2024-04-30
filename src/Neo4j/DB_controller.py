from neo4j import GraphDatabase
import concurrent.futures

class Neo4jConnection:
    query_1 = "RETURN n.id as subject, s.id as object, type(m) as relation"
    query_2 = """RETURN n.id as id, n.entity_name as entity_name, n.wikipedia_url as wikipedia_url, 
    n.wikipedia_summary as wikipedia_summary, n.wikidata_url as wikidata_url, n.wikidata_summary as wikidata_summary, 
    n.wikidata_aliases as wikidata_aliases"""


    def __init__(self, url, user, password):
        self.driver = GraphDatabase.driver(url, auth=(user, password))

    def close(self):
        if self.driver is not None:
            self.driver.close()
            self.driver = None

    def query(self, query, parameters=None):
        try:
            response = self.driver.execute_query(query, parameters) 
        except Exception as e:
            print(e)
            return -1
        return response[0]
    
    def export(self, file_name = 'saves'):
        end_path = file_name + '.graphml'

        temp_string = "CALL apoc.export.graphml.query('MATCH (n)-[m]->(r) RETURN n, r, m','" + end_path + "', {})"
        self.query(temp_string)
        return end_path
    
    def import_(self, file_name=r'saves.graphml'):
        self.delete_all_graph()

        query_string = "CALL apoc.import.graphml('" + file_name + "', {readLabels:true, storeNodeIds:true})"  
        self.query(query_string)

    def get_path(self):
        result = self.query("Call dbms.listConfig() YIELD name, value WHERE name='server.directories.import' RETURN value")
        return [record["value"] for record in result][0]
    
    def delete_all_graph(self):
        self.query("MATCH (n) DETACH DELETE n")
    
    def save_data(self, nodes, edges):
        self.delete_all_graph()

        for id in nodes:
            wikidata_id = id
            wikidata_aliases = nodes[id]["wikidata_aliases"]
            entity_name = nodes[id]["name"]
            wikidata_url = nodes[id]["wikidata_url"]
            wikidata_summary = nodes[id]["wikidata_summary"]
            self.query('CREATE (n ' + '{id: ' + f'"{wikidata_id}", wikidata_aliases: {wikidata_aliases}, entity_name: "{entity_name}", wikidata_url: "{wikidata_url}", wikidata_summary: "{wikidata_summary}"' +'})')

        for edge in edges:
            subject = edge["source"]["id"]
            object = edge["target"]["id"]
            relation = edge["label"]
            self.query('MATCH (n ' + '{id: "' + f'{subject}' + '"}) MATCH (s ' + '{id: "' + f'{object}' + '"}' + f') MERGE (n)-[m:{relation}]->(s)')
    
    def get_all_graph(self):
        nodes = self.query("MATCH (n) " + self.query_2)
        nodes = Neo4jConnection.__transform_nodes(nodes)
        edges = self.query("MATCH (n)-[m]->(s) " + self.query_1)
        edges = Neo4jConnection.__transform_edges(edges)
        return nodes, edges

    @staticmethod
    def __transform_edges(data):
        edges = [{"source": i['subject'], "target": i['object'], "label": i['relation']} for i in data]
        return edges


    @staticmethod
    def __transform_nodes(data):
        nodes = {}
        for i in data:
            nodes[i['id']] = { 
                    "name": i["entity_name"], 
                    "wikidata_url": i["wikidata_url"],
                    "wikidata_summary": i["wikidata_summary"],
                    "wikidata_aliases": i["wikidata_aliases"]
            }
            if i["wikidata_url"] is None:
                nodes[i['id']].update({"wikipedia_url": "", "wikipedia_summary": ""})
            else:
                nodes[i['id']].update({"wikipedia_url": i["wikipedia_url"], "wikipedia_summary": i["wikipedia_summary"]})
        
        return nodes
    
    def __create_helper(self, KG):
        entities = KG.get_entities()
        triplets = KG.get_triplets()
        KG.clear_data()

        query_one_entity = lambda request, id, end='': self.query(f'{request} (n ' + '{id: "' + f'{id}' +'"}' + f') {end}')

        for entity_name in entities:
            entity = entities[entity_name]
                
            wikidata_id = entity["wikidata"]["id"].replace('"', '\'')
            wikidata_url = entity["wikidata"]["url"]
            wikidata_summary = entity["wikidata"]["summary"].replace('"', '\'')
            wikidata_aliases = entity["wikidata"]["aliases"]
    
            if not query_one_entity("MATCH", wikidata_id, "RETURN n"):
                self.query('CREATE (n ' + '{id: ' + f'"{wikidata_id}", wikidata_aliases: {wikidata_aliases}, entity_name: "{entity_name}", wikidata_url: "{wikidata_url}", wikidata_summary: "{wikidata_summary}"' +'})')
            else:
                self.query('MATCH (n ' + '{id: ' + f'"{wikidata_id}"' +'}' + f') SET n.wikidata_aliases = {wikidata_aliases} SET n.wikidata_url = "{wikidata_url}" SET n.wikidata_summary = "{wikidata_summary}"')

            if "wikipedia" in entity:
                wikipedia_url = entity["wikipedia"]["url"]
                wikipedia_summary = entity["wikipedia"]["summary"].replace('"', '\'')

                #wikipedia_match = lambda: self.query('MATCH (n ' + '{id: "' + f'{wikidata_id}' +'"}' + ' RETURN n.wikipedia)')
                self.query('MATCH (n ' + '{id: ' + f'"{wikidata_id}"' +'}' + f') SET n.wikipedia_url = "{wikipedia_url}" SET n.wikipedia_summary = "{wikipedia_summary}"')


        for triplet in triplets:
            print(triplet)
            subject = triplet["subject"][1]
            relation = triplet["relation"].replace(" ", "_")
            relation = relation.replace(",", "_or")
            object = triplet["object"][1]

            #if not query_one_entity('MATCH', subject, 'RETURN n'):
            #    query_one_entity('CREATE', subject)

            #if not query_one_entity('MATCH', object, 'RETURN n'):
            #    query_one_entity('CREATE', object)

            self.query('MATCH (n ' + '{id: "' + f'{subject}' + '"}) MATCH (s ' + '{id: "' + f'{object}' + '"}' + f') MERGE (n)-[m:{relation}]->(s)')

    
    def create_graph(self, KG, texts, remove_coref, mode=0):

        if mode == 1:
            texts = remove_coref(texts)
            KG.text_to_KG(texts)
            self.__create_helper(KG)
            return

        for url in texts:
            texts[url]["text"] = remove_coref(texts[url]["text"])

        # деление текста на чанки по 5 текстов, каждый чанк обрабатывается в несколько потоков, следующий чанк обрабатывается только после завершения предыдущего
        # если не делить на чанки, то время работы будет меньше, но во время работы система будет загружена на 100%
        # чтобы увеличить/уменьшить количество текстов в чанке, нажо заменить 5 на другое число
        # система, на которой умеренно запускается при 5 текстах: intel i5, 1650 gtx, 8 ОЗУ
        texts = [{k: texts[k] for k in list(texts.keys())[i:i+5]} for i in range(0, len(texts), 5)]

        chunk_count = 0

        for chunk in texts:
            print("------------------------------------------------")
            print(f"processing {chunk_count}-{chunk_count+len(chunk)-1} articles")
            chunk_count += 5

            with concurrent.futures.ThreadPoolExecutor() as executor:
                futures = [executor.submit(KG.text_to_KG, chunk[url]["text"], is_print=False) for url in chunk]
                for futures in concurrent.futures.as_completed(futures):
                    self.__create_helper(KG)
