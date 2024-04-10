from neo4j import GraphDatabase
import concurrent.futures

class Neo4jConnection:
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
    
    def export(self, file_name = 'test'):
        end_path = file_name + '.graphml'

        temp_string = "CALL apoc.export.graphml.query('MATCH (n)-[m:LEADS_TO]->(r) RETURN n, r, m','" + end_path + "', {})"
        self.query(temp_string)
        return end_path
    
    def import_(self, file_name=r'test.graphml'):
        query_string = "MATCH (n) DETACH DELETE n"
        self.query(query_string)

        query_string = "CALL apoc.import.graphml('" + file_name + "', {readLabels:true, storeNodeIds:true})"  
        self.query(query_string)

    def get_path(self):
        result = self.run_query("Call dbms.listConfig() YIELD name, value WHERE name='server.directories.import' RETURN value")
        return [record["value"] for record in result][0]
    
    def create_graph(self, KG, texts, remove_coref):

        for url in texts:
            texts[url]["text"] = remove_coref(texts[url]["text"])

        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = [executor.submit(KG.text_to_KG, texts[url]["text"], is_print=False) for url in texts]
            for futures in concurrent.futures.as_completed(futures):
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
                        self.query('CREATE (n ' + '{id: ' + f'"{wikidata_id}", wikidata_aliases: {wikidata_aliases}, entity_name: "{entity_name}", wikidata_params: ["{wikidata_url}", "{wikidata_summary}"]' +'})')
                    if query_one_entity("MATCH", wikidata_id, "RETURN n"):
                        self.query('MATCH (n ' + '{id: ' + f'"{wikidata_id}"' +'}' + f') SET n.wikidata_aliases = {wikidata_aliases} SET n.wikidata_params = ["{wikidata_url}", "{wikidata_summary}"]')

                    if "wikipedia" in entity:
                        wikipedia_url = entity["wikipedia"]["url"]
                        wikipedia_summary = entity["wikipedia"]["summary"].replace('"', '\'')

                        #wikipedia_match = lambda: self.query('MATCH (n ' + '{id: "' + f'{wikidata_id}' +'"}' + ' RETURN n.wikipedia)')
                        self.query('MATCH (n ' + '{id: ' + f'"{wikidata_id}"' +'}' + f') SET n.wikipedia_params = ["{wikipedia_url}", "{wikipedia_summary}"]')


                for triplet in triplets:
                    print(triplet)
                    subject = triplet["subject"][1]
                    relation = triplet["relation"].replace(" ", "_")
                    object = triplet["object"][1]

                    #if not query_one_entity('MATCH', subject, 'RETURN n'):
                    #    query_one_entity('CREATE', subject)

                    #if not query_one_entity('MATCH', object, 'RETURN n'):
                    #    query_one_entity('CREATE', object)

                    self.query('MATCH (n ' + '{id: "' + f'{subject}' + '"}) MATCH (s ' + '{id: "' + f'{object}' + '"}' + f') MERGE (n)-[m:{relation}]->(s)')

