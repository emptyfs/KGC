from pygooglenews import GoogleNews
from newspaper import Article
from write_to_file import write_to_file
from fake_news_detection import predict_fake
import concurrent.futures

def process_article(entry):
    url = entry['link']
    title = entry['title']
    article = Article(url=url)
    try:
        article.download()
        article.parse()
        text = article.text
        fake_probability = predict_fake(title, text)["Fake"]
        return {
            "url": url,
            "title": title,
            "text": text,
            "fake_probability": fake_probability
        }
    except Exception:
        return None

def get_text_news_parallel(topic:str, time:str='1y'):
    gn = GoogleNews()
    news = gn.search(topic, when=time)

    articles_text = {}
    with concurrent.futures.ThreadPoolExecutor() as executor: # создание пула потоков
        futures = [executor.submit(process_article, entry) for entry in news['entries']] # создание задачи
        for future in concurrent.futures.as_completed(futures): # цикл по завершенным задачам 
            result = future.result()
            if result is not None:
                articles_text[result["url"]] = {
                    "title": result["title"],
                    "text": result["text"],
                    "fake_probability": result["fake_probability"]
                }
    
    return articles_text

texts = get_text_news_parallel(topic='Larian Studios')

write_to_file(texts, 'texts_1.txt')

validate_texts = {}
for url in texts:
    if texts[url]["fake_probability"] < 0.9:
        validate_texts[url] = texts[url]

write_to_file(validate_texts, 'validated_texts_1.txt')