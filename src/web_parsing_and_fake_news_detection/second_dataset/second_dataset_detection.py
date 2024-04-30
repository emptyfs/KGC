import pandas as pd
import sys

sys.path.append('src/web_parsing_and_fake_news_detection/')
from fake_news_detection import predict_fake

def check_news(articles:list, True_or_Right:str):
    right_total = 0
    #print("------------------------------")
    #print(f"Must be {True_or_Right}")
    for article in articles:
        predict = predict_fake(article[0], article[1])[True_or_Right]
        #print(f"{True_or_Right}: {predict} {article[0]}")
        if predict >= 0.9:
            right_total += 1

    return right_total

def text_to_csv(path:str):
    with open(path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    data = []
    for line in lines:
        data.append(line.strip().split('\t'))

    return pd.DataFrame(data[1:], columns=['Domain', 'Topic', 'News', 'Label'])


df_business = text_to_csv("src/web_parsing_and_fake_news_detection/second_dataset/train_English_Data_Business.txt")
#T:
#F:
df_celebrity = text_to_csv("src/web_parsing_and_fake_news_detection/second_dataset/train_English_Data_Celebrity_Full.txt")
#T:
#F:
df_education = text_to_csv("src/web_parsing_and_fake_news_detection/second_dataset/train_English_Data_Education.txt")
#T:
#F:
df_entertainment = text_to_csv("src/web_parsing_and_fake_news_detection/second_dataset/train_English_Data_Entertainment.txt")
#T:
#F:
df_politics = text_to_csv("src/web_parsing_and_fake_news_detection/second_dataset/train_English_Data_Politics.txt")
#T:
#F:
df_sports = text_to_csv("src/web_parsing_and_fake_news_detection/second_dataset/train_English_Data_Sports.txt")
#T:
#F:
df_technology = text_to_csv("src/web_parsing_and_fake_news_detection/second_dataset/train_English_Data_Technology.txt")
#T:
#F:

dfs = [df_business, df_celebrity, df_education, df_entertainment, df_politics, df_sports, df_technology]
#dfs = [df_business]

counter = 0
absolute_total_right = 0
absolute_total = 0
for df in dfs:
    print(counter)
    df_fake = df[df['Label'] == "Fake"]
    df_true = df[df['Label'] == "Legit"]

    fake_articles = [[row['Topic'], row['News']] for index, row in df_fake.iterrows()]
    true_articles = [[row['Topic'], row['News']] for index, row in df_true.iterrows()]

    counter += 1

    total_true = check_news(true_articles, 'Real')
    total_fake = check_news(fake_articles, 'Fake')

    absolute_total_right += total_true + total_fake
    #print(len(true_articles) + len(fake_articles))
    absolute_total += len(true_articles) + len(fake_articles)

    print(f"correct values percentage: {(total_true + total_fake)/(len(true_articles) + len(fake_articles))}")

print(f"absolute_value: {absolute_total_right/absolute_total}")
#print(absolute_total)