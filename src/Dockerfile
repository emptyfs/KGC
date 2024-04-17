#FROM python:3.7
FROM tiangolo/uwsgi-nginx-flask:python3.7

#RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

#RUN apt-get update
#RUN apt-get install -y software-properties-common gcc
#RUN apt-get install -y python3.7 python3-distutils python3-pip python3-apt

COPY requirements.txt .

RUN pip install torch==1.13.1 --no-cache-dir 
RUN pip install transformers==4.30.2 --no-cache-dir
RUN pip install -r requirements.txt --no-cache-dir
RUN python -m spacy download en_core_web_lg

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
    RUN apt-get install -y nodejs

#RUN pip install "setuptools<58.0.0"
#RUN pip install  lxml==5.1.0
#RUN pip install urllib3==1.26.6
#RUN pip install pygooglenews==0.1.2
#RUN pip install newspaper3k==0.2.8
#RUN pip install  torch==1.13.1
#RUN pip install  spacy==2.1.0

#RUN apt-get update && apt-get install -y \
#    curl \
#    && rm -rf /var/lib/apt/lists/*

WORKDIR /
COPY . .

EXPOSE 3000

CMD ["python", "main.py"]