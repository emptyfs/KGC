from GoogleNews import GoogleNews
from newspaper import Article
from write_to_file import write_to_file


# get news links from google news
def get_news_links(query, lang="en", max_links=10, period='1y'):
    googlenews = GoogleNews(lang=lang)
    googlenews.enableException(True)
    #googlenews.set_period(period)
    googlenews.search(query)

    current_page = 0
    temp_len = 0
    
    while len(googlenews.get_links()) < max_links:
        if temp_len == len(googlenews.get_links()):
            break
        else:
            temp_len = len(googlenews.get_links())

        googlenews.get_page(current_page)
        current_page += 1

    return list(set(googlenews.get_links()))[:max_links]

def get_texts(links):
    articles_text = {}

    for link in links:
        article = Article(url=link)
        try:
            article.download() # подгрузить содержимое страницы
            article.parse() # парсинг содержимого
            articles_text[link] = article.text
        except Exception:
            continue
    
    return articles_text


news_links = get_news_links("LETI", max_links=50)
articles_texts = get_texts(news_links)
write_to_file(articles_texts, 'texts.txt')




