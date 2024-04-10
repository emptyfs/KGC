def write_to_file(texts, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        for url in texts:
            file.write(f"URL: {url}\n")
            file.write(f"Title: {texts[url]['title']}\n")
            file.write(f"Text: {texts[url]['text']}\n")
            file.write(f"Fake_probability: {texts[url]['fake_probability']}\n")
            file.write(f"---<end>---\n")
        file.write(f"---<end_of_end>---")