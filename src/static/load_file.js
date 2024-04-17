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
        }
    ).then(res=>
        {
            alert(message);
            switch(url)
            {
                case "/last_text":
                    window.location = '/knowledge_graph';
                    break;
                case "/import":
                    get_all_graph();
            }
        });
}

export {load_file, __upload_file};