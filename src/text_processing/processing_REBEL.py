from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import spacy
import neuralcoref
import math
import torch
import re
import wikipedia
import wikidata.client
import requests

device = 'cuda' if torch.cuda.is_available() else 'cpu'  # определение устройства (GPU или CPU)

tokenizer = AutoTokenizer.from_pretrained("Babelscape/rebel-large") # автоматическое извлечение архитектуры по названию
#model = AutoModelForSeq2SeqLM.from_pretrained("Babelscape/rebel-large", force_download=True, resume_download=False).to(device)
model = AutoModelForSeq2SeqLM.from_pretrained("Babelscape/rebel-large").to(device)

nlp = spacy.load('en_core_web_lg') # (предварительно нужно загрузить) python -m spacy download en_core_web_lg
neuralcoref.add_to_pipe(nlp)

client = wikidata.client.Client()

def remove_coref(text:str):
    """
    Приведение референциональных тождеств к единообразицию 
    Например: "Солнце встало, оно ярко светит" -> "Солнце встало, солнце ярко светит"

    Параметры: text - входной текст
    """
    text = re.sub(r'\n+', '.', text)  
    text = re.sub(r'\[\d+\]', ' ', text) 
    text = nlp(text)

    if text._.has_coref:
         text = nlp(text._.coref_resolved)
        
    return str(text)

# класс графа знаний
class Knowledge_Graph():
    def __init__(self):
        """
        поля:
            * entities - сущности в виде словаря, где ключ - название сущности, а значение - словарь, 
            в котором ключи - url на вики (если на вики есть сущнсость), summary на вики (если на вики есть сущнсость)
            т.е. {{имя сущности: {url:... , summary:...}}, ...}

            * triplets - триплеты [{субъект: ..., отношение: ..., объект: }, ...]
        """

        self.entities = {}
        self.triplets = []

    def clear_data(self):
        self.entities = {}
        self.triplets = []

    def get_entities(self):
        """
        возвращает словарь сущностей
        """
        return self.entities
    
    def get_triplets(self):
        """
        возвращает список триплетов
        """
        return self.triplets
    
    def __are_triplets_equal(self, triplet_1:dict, triplet_2:dict):
        """
        сравнивает два триплета, если равны (т.е. если это один и тот же триплет), возвращает True

        Параметры:

        * triplet_1 - первый триплет

        * triplet_2 - второй триплет
        """
        return all(triplet_1[i] == triplet_2[i] for i in ["subject", "relation", "object"])

    def __is_exist_triplet(self, new_triplet:dict):
        """
        проверяет, записан ли в поле триплетов передаваемый в аргументах триплет

        Параметры:

        * new_triplet: dict - триплет
        """
        return any(self.__are_triplets_equal(new_triplet, old_triplet) for old_triplet in self.triplets)
    
    def __check_wikidata_entity(self, entity_name:str):

        # запрос к Wikidata для поиска сущностей по названию
        try:
            url = "https://www.wikidata.org/w/api.php"
            params = {
                "action": "wbsearchentities",
                "format": "json",
                "language": "en",
                "search": entity_name,
            }

            response = requests.get(url, params=params)
            data = response.json()

            entity_id = data['search'][0]['id']
            page = client.get(entity_id, load=True) # wikidata client (look 19)

            entity_aliases = []
            attributes = page.attributes
            if 'aliases' in attributes:
                for i in attributes['aliases'].get('en', []):
                    entity_aliases.append(i["value"])
                    
            entity_data = {
                "id": str(entity_id),
                "title": str(page.label),
                "url": f"https://www.wikidata.org/wiki/{entity_id}",
                "summary": str(page.description),
                "aliases": entity_aliases
            }
            return entity_data
        except:
            return None

    def __check_wikipedia_entity(self, entity_name:str):
        """
        проверяет, существует ли сущность к графе знаний Wikidata

        Параметры:

        * entity_name - название сущности 
        """
        try:
            #entity_name = wikipedia.search(entity_name)[0]
            page = wikipedia.page(entity_name, auto_suggest=False)
            entity_data = {
                "title": page.title,
                "url": page.url,
                "summary": page.summary
            }
            return entity_data
        except:
            return None
        
    def __add_entity(self, entity:dict, KG_name:str):
        """
        Добавляет сущность в поле сущностей

        Параметры:

        * entity - сущность
        * KG_name - название графа знаний, в котором была найдена сущность
        """
        title = entity["title"]
        add_values = lambda entity, KG_name: {KG_name: {key:value for key, value in entity.items() if key != "title"}} 

        if title in self.entities:
             self.entities[title].update(add_values(entity, KG_name))
        else:
            self.entities[title] = add_values(entity, KG_name)
        # словарь ключ - название сущности, значение словарь, в котором ключи - url, summary

    def print_triplets(self):
        """
        Вывод в консоль всех триплетов
        """
        print("Triplets:")
        for triplet in self.triplets:
            print(f"  {triplet}")

    def print_entities(self):
        """
        Вывод в консоль всех сущностей
        """
        print("Entities:")
        for entity in self.entities.items():
            print(f"  {entity}")

    def __add_triplet(self, triplet:dict):
        """
        Добавляет триплет в список триплетов

        Параметры:

        * triplet - триплет
        """

        is_any_entites = lambda entites: any(entity is None for entity in entites)

        is_wikipedia_None = False
        is_wikidata_None = False

        # извлечение сущностей из других графов знаний
        get_entites = lambda get_entities_function, triplet: [get_entities_function(entity) 
                                                              for entity in [triplet["subject"], triplet["object"]]]

        wikipedia_entities = get_entites(self.__check_wikipedia_entity, triplet)

        # поиск сущностей в wikipedia
        if is_any_entites(wikipedia_entities):
            is_wikipedia_None = True
        else:
            triplet["subject"] = wikipedia_entities[0]["title"]
            triplet["object"] = wikipedia_entities[1]["title"]

        wikidata_entites = get_entites(self.__check_wikidata_entity, triplet)

        # если сущности не существует в wikidata, то сущность не добавляется
        if is_any_entites(wikidata_entites):
            is_wikidata_None = True

        if is_wikidata_None:
            return

        # добавление подтвержденный сущностей
        if not is_wikipedia_None:
            triplet["subject"] = [triplet["subject"], wikidata_entites[0]["id"]]
            triplet["object"] = [triplet["object"], wikidata_entites[1]["id"]]
            for entity in wikipedia_entities:
                self.__add_entity(entity, "wikipedia")

        else:
            triplet["subject"] = [wikidata_entites[0]["title"], wikidata_entites[0]["id"]]
            triplet["object"] = [wikidata_entites[1]["title"], wikidata_entites[1]["id"]]
            
        for entity in wikidata_entites:
            wikidata_entites[0]["title"] = triplet["subject"][0]
            wikidata_entites[1]["title"] = triplet["object"][0]
            self.__add_entity(entity, "wikidata")

        # добавление триплетов
        if not self.__is_exist_triplet(triplet):
            self.triplets.append(triplet)

    def __extract_triplets(self, REBEL_text:str):

        """
        Извлекает все триплеты из переданного в аргументе текста (текст должен быть в формате REBEL-модели), после чего
        вызывает метод записи триплетов для всех извлеченных триплетов

        Параметры:

        * REBEL_text - текст в формате REBEL-модели
        """


        triplets = []
        relation, subject, relation, object, current = '', '', '', '', ''

        for token in REBEL_text.strip().replace("<s>", "").replace("<pad>", "").replace("</s>", "").split():

            if token == "<triplet>":
                current = 't'
                if relation != '':
                    triplets.append({
                        'subject': subject.strip(),
                        'relation': relation.strip(),
                        'object': object.strip()
                    })
                    relation = ''
                subject = ''

            elif token == "<subj>":
                current = 's'
                if relation != '':
                    triplets.append({
                        'subject': subject.strip(),
                        'relation': relation.strip(),
                        'object': object.strip()
                    })
                object = ''

            elif token == "<obj>":
                current = 'o'
                relation = ''

            else:
                if current == 't':
                    subject += ' ' + token
                elif current == 's':
                    object += ' ' + token
                elif current == 'o':
                    relation += ' ' + token

        if subject != '' and relation != '' and object != '':
            triplets.append({
                'subject': subject.strip(),
                'relation': relation.strip(),
                'object': object.strip()
            })
        
        for triplet in triplets:
            self.__add_triplet(triplet)

    def text_to_KG(self, text:str, interval_length:int=128, is_print:bool=False):
        """
        Перевод текста в граф знаний на основе модели REBEL

        Параметры:

        * text - текст для перевода в граф знаний (текст должен быть на английском языке)

        * interval_length - размер интервалов в токенах (REBEL модель работает точнее на небольших текстах, поэтому в процессе
        он разделяется на [(количество токенов в тексте / interval_length)] интервалов, в каждом из которых interval_length токенов)

        * is_print - вывести ли в консоль количество токенов текста, количество интервалов, границы интервалов
        """

        # токенизация
        model_inputs = tokenizer(text, return_tensors="pt")
        # padding — тензоры подаваемые в модель должны иметь одинаковую длину. Если этот параметр = True, то 
        #коротки последовательности дополняются служебными токенами до длины самой длинной последовательности.

        #truncation — очень длинные последовательности тоже плохо. Если параметр = True, 
        # то все последовательности усекаются до максимальной длины.

        # max_length — указываем до скольки токенов усекать последовательность.

        # Вывод
        # input_ids — массив чисел, каждое из которых соответствует одному токену.

        # attention_mask — указывает модели, какие токены следует учитывать, а какие игнорировать.
    

        # вычисление интервалов
        number_tokens = len(model_inputs ["input_ids"][0])
        number_intervals = math.ceil(number_tokens / interval_length)
        offset = math.ceil((number_intervals * interval_length - number_tokens) / max(number_intervals - 1, 1))
        intervals_boundaries = []

        intervals_boundaries = [[-offset * i + interval_length * i, -offset * i + interval_length * (i + 1)] 
                                for i in range(number_intervals)]

        # вывести ли в консоль токены и т.д.
        if is_print:
            print(f"Input has {number_tokens} tokens")
            print(f"Input has {number_intervals} intervals")
            print(f"Interbals boundaries are {intervals_boundaries}")

        # токены на вход, поделенные на интервалы
        model_inputs = {
            "input_ids": torch.stack([model_inputs["input_ids"][0][boundary[0]:boundary[1]] for boundary in intervals_boundaries]),
            "attention_mask": torch.stack([model_inputs["attention_mask"][0][boundary[0]:boundary[1]] for boundary in intervals_boundaries])
        }

        # параметры модели
        num_return_sequences = 3
        gen_kwargs = {
            "max_length": 256,
            "length_penalty": 0,
            "num_beams": 3,
            "num_return_sequences": num_return_sequences
        }

        generated_tokens = model.generate(
            **model_inputs,
            **gen_kwargs,
        )

        # детокенизация
        decoded_preds = tokenizer.batch_decode(generated_tokens, skip_special_tokens=False)

        # создание графа знаний
        for sentence in decoded_preds:
            self.__extract_triplets(sentence)