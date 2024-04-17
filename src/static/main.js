let texts = "";
let table_number = 0;
let table_len = 0;
let table_remains = 0;
let table;
let rows = 5;

function init_server_news_data(full_text)
{
    texts = full_text;
    table_len = Object.keys(texts).length;
    table_remains = table_len % rows;
    show_news_table();
    $('#news-list-container').show();
}

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
            "cursor": "pointer",
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

function load_file(url, message) 
{
    let input = $('<input>').attr('type', 'file');

    input.on('change', () => 
    {
        if (input[0].files.length > 0) 
        {
            let file = input[0].files[0];
            __upload_file(file, url, message);
            input.val('');
        }
    });

    input.click();
}

function __bef_send()
{
    $('#waiting-time').text('Waiting for response...');
    $('#another-text-build').prop('disabled', true);
    $('#remove-fake-news-btn').prop('disabled', true);
    $('#search-btn').prop('disabled', true);
    $('#remove-fake-news-btn').prop('disabled', true);

}

function __after_send()
{
    $('#waiting-time').text('');
    $('#another-text-build').prop('disabled', false);
    $('#remove-fake-news-btn').prop('disabled', false);
    $('#search-btn').prop('disabled', false);
    $('#remove-fake-news-btn').prop('disabled', false);
}

function __upload_file(file, url, message) 
{
    let formData = new FormData();
    formData.append('file', file);

    $.ajax(
        {
            url: url,
            data: formData,
            type: 'POST',
            contentType: false,
            processData: false,
            beforeSend: () => {
                __bef_send();
            }
        }
    ).then(res=>
        {
            alert(message);
            __after_send();
            window.location = '/knowledge_graph';
        });
}

$(document).ready(() => 
{
    $('#another-text-build').click(() =>
    {
        load_file('/load_text', "the graph has been successfully built");
    });

    $('#last-text').click(() =>
    {
        $.ajax({
            url: '/last_text',
            type: 'GET',
        }).then(res=>
            {
                if (res.full_text !== "none")
                {
                    init_server_news_data(res.full_text);
                }
                else
                {
                    alert("there are no texts on the server yet, first perform a search");
                }
            });;
    });

    $('#last-graph').click(() =>
    {
        window.location = '/knowledge_graph';
    });

    $('#search-btn').click(() => 
    {
        let title = $('#headline').val();

        $.ajax({
            url: '/get_news',
            type: 'POST',
            data: {"title": title},
            beforeSend: ()=> 
            {
                $('#news-list-container').hide();
                __bef_send();

            }
        }).then(res=>
            {
                __after_send();
                init_server_news_data(res.full_text);
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

    $('#remove-fake-news-btn').click(() => 
    {
        $.ajax({
            url: '/delete_fakes',
            type: 'POST',
            data: JSON.stringify(texts),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: ()=> 
            {
                __bef_send();
            }
        }).then(res=>
            {
                __after_send();
                table_number = 0;
                table_len = 0;
                table_remains = 0;

                init_server_news_data(res.validate_text);
            });
    });

    $('#generate-graph-btn').click(() =>
    {
        alert("when the entire graph is loaded, you will receive a notification.");
        $.ajax({
            url: '/knowledge_graph',
            type: 'POST',
            data: JSON.stringify(texts),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: () => {
                __bef_send();
            }
        }).then(res => {
            alert("The entire graph is loaded");
            __after_send();
            //window.open('/knowledge_graph', '_blank');
            window.location = '/knowledge_graph';
        });
    });
});