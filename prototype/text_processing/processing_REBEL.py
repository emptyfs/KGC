from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import spacy
import neuralcoref
import math
import torch
import re
import wikipedia

tokenizer = AutoTokenizer.from_pretrained("Babelscape/rebel-large") # автоматическое извлечение архитектуры по названию
model = AutoModelForSeq2SeqLM.from_pretrained("Babelscape/rebel-large")

nlp = spacy.load('en_core_web_lg') # (предварительно нужно загрузить) python -m spacy download en_core_web_lg
neuralcoref.add_to_pipe(nlp)


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
        """
        проверяет, существует ли сущность к графе знаний Wikidata

        Параметры:

        * entity_name - название сущности 
        """
        try:
            page = wikipedia.page(entity_name, auto_suggest=False)
            entity_data = {
                "title": page.title,
                "url": page.url,
                "summary": page.summary
            }
            return entity_data
        except:
            return None
        
    def __add_entity(self, entity:dict):
        """
        Добавляет сущность в поле сущностей

        Параметры:

        * entity - сущность
        """
        self.entities[entity["title"]] = {key:value for key, value in entity.items() if key != "title"}
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

        # проверка, есть ли сущности в wikidata
        wikidata_entities = [self.__check_wikidata_entity(entity) for entity in [triplet["subject"], triplet["object"]]]

        # если хотя бы одной сущности из триплета не найдено, то не добавляются
        if any(entity is None for entity in wikidata_entities):
            return
        
        # переменовывание сущностей согласно wikidata
        triplet["subject"] = wikidata_entities[0]["title"]
        triplet["object"] = wikidata_entities[1]["title"]

        # добавление подтвержденный сущностей
        for entity in wikidata_entities:
            self.__add_entity(entity)

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



text = """
“We Are Not That Different”: the Mother Language Day Celebrated at LETI

Students from Russia, Iran, Turkey, Cameroon, Algeria, Saudi Arabia, Angola and Mali presented their performances at the International Mother Language Day Concert. 113

The International Mother Language Day Concert took place on February, 19 in the Assembly Hall of Building 3. Russian and foreign students took part in the event and introduced each other to the cultural riches of their homelands. The concert was opened by Head of the Department of Russian Language of ETU “LETI” Ekaterina M. Bayeva.

«Today we are celebrating cultural diversity. We are celebrating your national languages and the countries where you come from, our friendship and our mutual respect for each other. Today’s event has given us all a unique opportunity to learn something new about different languages and countries.» Head of the Department of Russian Language of ETU “LETI” Ekaterina M. Bayeva

Head of the International Students Office of ETU “LETI” Renat A. Yalyshev also addressed the performers and guests with a welcoming speech.

«There are more than 190 nationalities living in Russia and almost all of them have their own languages. With your arrival there are even more ethnic groups and languages to be found in our country. Students and teachers of Russian universities always take interest in the cultures of other nations and this is why we are happy to have so many foreign students, this is why we hold events like today’s concert.» Head of the International Students Office of ETU “LETI” Renat A. Yalyshev

The year 2024 marks 225 years since a great Russian poet and the creator of the modern Russian language Alexander S. Pushkin was born, therefore, the first part of the concert concentrated on his literary legacy. Russian and foreign students recited famous poems and fairytales by A. S. Pushkin both in the original and in translation to various languages, from French to Urdu.

The second part of the concert consisted of performances of different kinds and on different topics presented in the mother tongues of the participants. The students recited poems and sang songs in 11 languages, including such remote and unique as Berber and Chichewa. The other performances included cultural-studies-oriented presentations on Algeria, Turkey and Senegal, an Angolan dance named “kuduro” and a mini-lesson on languages Twi and Farefare that are spoken in Ghana.

«Today’s concert is a very good idea. It unites students who come from different cultures and speak different languages. The International Students Office and the Department of the Russian Language did a great job with setting up this event and giving us the good vibe to present our countries and our cultures.» A student of the 6th group of the Preparatory Department of ETU “LETI” Drif Mohamed Habib

Finally, the 1st group of the Preparatory Department of ETU “LETI” took the stage to sing a famous M. N. Dunayevski’s song “Bad Weather” in Russian.

«It’s very good to hear what other languages sound because when you only hear your language, you don’t know the differences and the similarities between languages. And when you start learning other languages, you see some similarities and you start to think: although we come from different places, we are not that different.» A student of the 6th group of the Preparatory Department of ETU “LETI” Iyice Mustafa Kerim

In total, 40 people performed in the concert. They represented 17 languages. Some students participated in the Mother Language Day Celebration for the second time. Moreover, many participants of the last year’s concert came to see this year’s event.

About the International Mother Language Day

The International Mother Language Day was established by the UNESCO General Conference in 1999 and was first celebrated in 2000. ETU “LETI” held the first Mother Language Day Concert in 2023.
"""

KG = Knowledge_Graph()
KG.text_to_KG(remove_coref(text), is_print=True)
KG.print_triplets()