let is_hide_search_news = false;

$(document).ready(function() {
    $('#search-btn').click(function() {
        is_hide_search_news = !is_hide_search_news;
        if (is_hide_search_news) {
            $('#news-list-container').show();
        } else {
            $('#news-list-container, #graph-container').hide();
        }
    });

    $('#remove-news-btn').click(function() {
        // Здесь должен быть JavaScript-код для удаления выбранной новости из списка
    });

    $('#remove-fake-news-btn').click(function() {
        // Здесь должен быть JavaScript-код для удаления фейковых новостей
    });

    $('#generate-graph-btn').click(function() {
        // Здесь должен быть JavaScript-код для генерации графа на основе полученных новостей
        // После генерации графа, показываем контейнер с графом
        $('#graph-container').show();
    });
});