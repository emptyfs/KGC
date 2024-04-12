let is_hide_search_news = false;
let texts = "";
let table_number = 0;
let table_len = 0;
let table_remains = 0;
let table;
let rows = 5;

function get_news_table(start, finish, texts)
{
    let news_array = [];
    Object.keys(texts).slice(start, finish).forEach((key) => 
    {
        news_array.push({"url": key, "title": texts[key]["title"], "fake_probability": texts[key]["fake_probability"]});
    });

    return news_array;
}

function show_news_table()
{
    $('#news-list').empty();
    if ((table_number + 1) * rows <= table_len)
    {
        let temp =  rows * (table_number + 1);
        table = get_news_table(temp - rows, temp, texts);                    
    }
    else
    {
        table = get_news_table(table_len - table_remains, table_len, texts);  
    }
    let news_list = $('#news-list');
    for (let i = 0; i < table.length; i++) 
    {
        let line = $('<div>').css({
            "position": "relative",
            "width": "100%",
            "height": "1px",
            "background-color": "black",
        });
        let temp_string = String((table_number*rows)+1+i);
        let div = $('<div>').css({
            "display": "flex",
            "justify-content": "space-between",
            "align-items": "center"
        });
        let list_item = $('<li>').text(temp_string +'. ' + String(table[i]["title"]));
        list_item.on('click', ()=>{window.open(table[i]["url"], '_blank')});
        let list_button = $('<button>').html('&#10006;').css({
            "all": "initial",
            "color": "red",
            "margin-left": "auto",
        });
        list_button.hover(function(){$(this).css({"background-color": "#0056b3", "border-radius": "50%"})}, function(){$(this).css("background-color", "")});
        list_button.click(() =>
        {
            delete texts[table[i]["url"]];
            --table_len;
            table_remains = table_len % rows;
            show_news_table();
        });
        div.append(list_item);
        div.append(list_button);
        news_list.append(div);
        news_list.append(line);
    }
}

$(document).ready(() => 
{
    $('#search-btn').click(() => 
    {
        let title = $('#headline').val();

        $.ajax({
            url: '/get_news',
            type: 'POST',
            data: {"title": title},
            beforeSend: ()=> 
            {
                $('#waiting-time').text('Waiting for response...');
            },
            success: ()=>
            {
                $('#waiting-time').text('');
            },
        }).then(res=>
            {
                texts = res.full_text;
                table_len = Object.keys(texts).length;
                table_remains = table_len % rows;
                show_news_table();
                $('#news-list-container').show();
            });
    });

    $('#left_button').click(() =>
    {
        if (table_number > 0)
        {
            --table_number;
            show_news_table();
        }
    });

    $('#right_button').click(() =>
    {
        if ((table_number+1) * rows < table_len)
        {
            ++table_number;
            show_news_table();
        }
    });

    $('#remove-news-btn').click(() =>
    {
        // Здесь должен быть JavaScript-код для удаления выбранной новости из списка
    });

    $('#remove-fake-news-btn').click(() =>
    {
        // Здесь должен быть JavaScript-код для удаления фейковых новостей
    });

    $('#generate-graph-btn').click(() =>
    {
        // Здесь должен быть JavaScript-код для генерации графа на основе полученных новостей
        // После генерации графа, показываем контейнер с графом
        $('#graph-container').show();
    });
});