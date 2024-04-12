from flask import Flask, render_template, request, jsonify
from Neo4j.DB_controller import Neo4jConnection
from text_processing.processing_REBEL import Knowledge_Graph, remove_coref
from text_processing.read_from_file import read_from_file
from web_parsing_and_fake_news_detection.google_search_vpn import searh_start

app = Flask(__name__)

#db = Neo4jConnection(url="bolt://localhost:7687", user="neo4j", password="123456789")


#KG = Knowledge_Graph()
#texts = read_from_file("validated_texts.txt")
#db.create_graph(KG=KG, texts=texts, remove_coref=remove_coref)

@app.route('/', methods=["GET"])
def load_main_page():
    return render_template("main.html")

@app.route('/get_news', methods=["POST"])
def show_news():
    title = request.form["title"]
    full_text = searh_start(title)
    #full_text = read_from_file("texts.txt")

    return jsonify({"full_text": full_text})


app.run(host="0.0.0.0", port=3000)

