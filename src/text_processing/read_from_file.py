import os

def read_from_file(filename):
    if not os.path.exists(filename):
        print("The file does not exists")
        return

    with open(filename, 'r', encoding='utf-8') as file:
        result = {}
        lines = file.readlines()
        url, title, text, fake_probability, current = "", "", "", "", ""
        
        for line in lines:
            if line == "\n":
                continue
            if line.startswith("URL:"):
                url += line[len("URL:"):]
                current = "URL"
            elif line.startswith("Title:"):
                title += line[len("Title:"):]
                current = "Title"
            elif line.startswith("Text:"):
                text += line[len("Text:"):]
                current = "Text"
            elif line.startswith("Fake_probability:"):
                fake_probability += line[len("Fake_probability:"):]
                current = "Fake_probability"
            elif line.startswith("---<end>---"):
                result[url] = {
                    "title": title,
                    "text": text,
                    "fake_probability": fake_probability
                }
                url, title, text, fake_probability, current = "", "", "", "", ""
            elif current == "URL":
                url += line
            elif current == "Title":
                title += line
            elif current == "Text":
                text += line
            elif current == "Fake_probability":
                fake_probability += line


    return result