from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("hamzab/roberta-fake-news-classification")
model = AutoModelForSequenceClassification.from_pretrained("hamzab/roberta-fake-news-classification")

def predict_fake(title:str, text:str):
    """
    Опрелеляет, является новостная статья правдивой или нет

    Параметры:
    * title - название статьи
    * text - текст статьи
    """
    input_str = "<title>" + title + "<content>" +  text + "<end>"

    input_ids = tokenizer.encode_plus(input_str, max_length=512, padding="max_length", 
                                      truncation=True, return_tensors="pt")
    
    device = 'cuda' if torch.cuda.is_available() else 'cpu' # вычисления на gpu или cpu
    model.to(device) # перемещение модели соответственно на gpu или cpu

    with torch.no_grad():
        output = model(input_ids["input_ids"].to(device), attention_mask=input_ids["attention_mask"].to(device))

    # словарь, в котором указаны вероятности, что новость - фейк или не фейк
    return dict(zip(["Fake","Real"], [x.item() for x in list(torch.nn.Softmax(dim=1)(output.logits)[0])]))