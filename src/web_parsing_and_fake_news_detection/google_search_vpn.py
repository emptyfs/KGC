from pygooglenews import GoogleNews # поиск новостных статей через google
from newspaper import Article # парсинг
from write_to_file import write_to_file # запись в txt
from fake_news_detection import predict_fake # провка новостей на правдивость
 
'''pygooglenews
можно извлечь данные за определенный период
можно извлечь по словам в заголовке новостной статьи
можно излечь по одной из доступных тем
'''

def get_text_news(topic:str, time:str='1y'):
    """
    Возвращает словарь, ключ - url веб-страницы статьи, значенение - тексты со страницы
    Принимет тему/ключевые слова + за какое время делать поиск (за последний/ие час/неделю/месяц/год)

    Параметры:
    topic - тема новостей (на английском языке)
    time - период публикации
        
    """

    gn = GoogleNews()
    news = gn.search(topic, when=time) # поиск по слову
    #news = gn.topic_headlines('TECHNOLOGY') # поиск по теме
    #news = gn.search('TECHNOLOGY')

    articles_text = {}  # словарь: ключ - url новостной статьи, значение - ее содержание
    entries = news['entries']
    #count = 0
    for entry in entries:
        #count += 1
        #print(count)
        url = entry['link']
        title = entry['title']
        article = Article(url=url)
        try:
            article.download() # подгрузить содержимое страницы
            article.parse() # парсинг содержимого
            text = article.text


            articles_text[url] = {
                "title": title, 
                "text": text, 
                "fake_probability": predict_fake(title, text)["Fake"]
                }
            
        except Exception:
            continue

        #(article.authors)
        #(article.publish_date)
        #(article.text)
        #(article.top_image)
        #(article.movies)

    return articles_text


texts = get_text_news(topic='Larian Studios')
write_to_file(texts, 'texts.txt')

validate_texts = {}
for url in texts:
    if texts[url]["fake_probability"] < 0.9:
        validate_texts[url] = texts[url]

write_to_file(validate_texts, 'validated_texts.txt')
    