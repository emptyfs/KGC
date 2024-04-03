import spacy
import pandas as pd
import re
import neuralcoref


import sys
sys.path.append("..")
from web_parsing.google_search import get_text_news

nlp = spacy.load('en_core_web_lg')
neuralcoref.add_to_pipe(nlp)
nlp.add_pipe(nlp.create_pipe('sentencizer'))

#doc = nlp("I like the cat you have, little one")

# pos_ - часть речи (морфологический анализ)
# dep_ - роль в предложении (синтаксический анализ)

def remove_coref(text):
    text = re.sub(r'\n+', '.', text)  # replace multiple newlines with period
    text = re.sub(r'\[\d+\]', ' ', text)  # remove reference numbers
    text = nlp(text)

    if text._.has_coref:
         text = nlp(text._.coref_resolved)
        
    return text

def getSentences(text):
    text = nlp(text)

    if text._.has_coref:
        text = nlp(text._.coref_resolved)

    return [sent.string.strip() for sent in text.sents]

def printToken(token):
    print(token.text, "->", token.dep_)

def appendChunk(original, chunk):
    return original + ' ' + chunk

def isRelationCandidate(token):
    deps = ["ROOT", "adj", "attr", "agent", "amod"]
    return any(subs in token.dep_ for subs in deps)

def isConstructionCandidate(token):
    deps = ["compound", "prep", "conj", "mod"]
    return any(subs in token.dep_ for subs in deps)

def processSubjectObjectPairs(tokens):
    subject = ''
    object = ''
    relation = ''
    subjectConstruction = ''
    objectConstruction = ''
    for token in tokens:
        printToken(token)
        if "punct" in token.dep_:
            continue
        if isRelationCandidate(token):
            relation = appendChunk(relation, token.lemma_)
        if isConstructionCandidate(token):
            if subjectConstruction:
                subjectConstruction = appendChunk(subjectConstruction, token.text)
            if objectConstruction:
                objectConstruction = appendChunk(objectConstruction, token.text)
        if "subj" in token.dep_:
            subject = appendChunk(subject, token.text)
            subject = appendChunk(subjectConstruction, subject)
            subjectConstruction = ''
        if "obj" in token.dep_:
            object = appendChunk(object, token.text)
            object = appendChunk(objectConstruction, object)
            objectConstruction = ''

    return (subject.strip(), relation.strip(), object.strip())

def processSentence(sentence):
    tokens = nlp(sentence)
    return processSubjectObjectPairs(tokens)

#print(wiki_data.loc[0,'text'])
texts = get_text_news(topic='little cats', time = '4h')

#for i in text.values():
#    print(get_entity_pairs(i))

triples = []

for text in texts:
    #text = remove_coref(text)
    print('\n' + text + '\n')
    #sentences = getSentences(texts[text])

    #for sentence in sentences:
        #triples.append(processSentence(sentence))

#print(triples)