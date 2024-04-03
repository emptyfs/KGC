def write_to_file(texts, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        for url in texts:
            file.write(f"URL: {url}\n")
            file.write(f"Text: {texts[url]}\n")
            file.write(f"--------------------------------------------------------------end_of_end\n\n")