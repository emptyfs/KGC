import spacy
import re
import neuralcoref


import sys
sys.path.append("..")
from prototype.web_parsing.google_search_vpn import get_text_news

nlp = spacy.load('en_core_web_lg')
neuralcoref.add_to_pipe(nlp)

def remove_coref(text):
    text = re.sub(r'\n+', '.', text)  # replace multiple newlines with period
    text = re.sub(r'\[\d+\]', ' ', text)  # remove reference numbers
    text = nlp(text)

    if text._.has_coref:
         text = nlp(text._.coref_resolved)
        
    return text

text = get_text_news(topic='little cats', time = '4h')

print(text.values())

"""for i in text.values():
    print(remove_coref(i))"""