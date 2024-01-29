from pygooglenews import GoogleNews # поиск новостных статей через google
from newspaper import Article # парсинг
 
'''pygooglenews
можно извлечь данные за определенный период
можно извлечь по словам в заголовке новостной статьи
можно излечь по одной из доступных тем
'''

def get_text_news(topic, time='2w'):
    """Принимет тему/ключевые слова + за какое время делать поиск (за последний/ие час/неделю/месяц/год)
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
        article = Article(url=url)
        try:
            article.download() # подгрузить содержимое страницы
            article.parse() # парсинг содержимого
            articles_text[url] = article.text
        except Exception:
            continue

        #(article.authors)
        #(article.publish_date)
        #(article.text)
        #(article.top_image)
        #(article.movies)

    return articles_text

texts = get_text_news(topic='little cats', time = '1h')
for i in texts:
    print('---------------------------------------------------------------')
    print(i + '. - ' + texts[i])
    print('---------------------------------------------------------------')
    

