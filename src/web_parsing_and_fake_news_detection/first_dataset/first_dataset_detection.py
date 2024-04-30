import pandas as pd
import sys

sys.path.append('src/web_parsing_and_fake_news_detection/')
from fake_news_detection import predict_fake

def check_news(articles:list, True_or_Right:str):
    right_total = 0
    print("------------------------------")
    print(f"Must be {True_or_Right}")
    for article in articles:
        predict = predict_fake(article[0], article[1])[True_or_Right]
        print(f"{True_or_Right}: {predict} {article[0]}")
        if predict >= 0.9:
            right_total += 1

    return right_total

df = pd.read_csv("src/web_parsing_and_fake_news_detection/first_dataset/Fake_News_detection.csv")

df_fake = df[df['Label'] == 0]
df_true = df[df['Label'] == 1]

fake_articles = [[row['Headline'], row['Body']] for index, row in df_fake.iterrows()]
true_articles = [[row['Headline'], row['Body']] for index, row in df_true.iterrows()]


total_true = check_news(true_articles, 'Real')
total_fake = check_news(fake_articles, 'Fake')

print(f"correct values percentage: {(total_true + total_fake)/(len(true_articles) + len(fake_articles))}")