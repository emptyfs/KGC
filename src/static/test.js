let is_hide_search_news = false

function searchNews() {
    is_hide_search_news = !is_hide_search_news;
    // Здесь должен быть JavaScript-код для отправки запроса на сервер и получения списка новостей
    // После получения списка новостей, показываем контейнер с новостями
    if (is_hide_search_news)
    {
        document.getElementById('news-list-container').style.display = 'block';
    }
    else
    {
        document.getElementById('news-list-container').style.display = 'none';
        document.getElementById('graph-container').style.display = 'none';
    }
}

function removeNews() {
    // Здесь должен быть JavaScript-код для удаления выбранной новости из списка
}

function removeFakeNews() {
    // Здесь должен быть JavaScript-код для удаления фейковых новостей
}

function generateGraph() {
    // Здесь должен быть JavaScript-код для генерации графа на основе полученных новостей
    // После генерации графа, показываем контейнер с графом
    document.getElementById('graph-container').style.display = 'block';
}