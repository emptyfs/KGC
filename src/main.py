from flask import Flask, render_template, request, jsonify, send_file
from Neo4j.DB_controller import Neo4jConnection
from text_processing.processing_REBEL import Knowledge_Graph, remove_coref
from text_processing.read_from_file import read_from_file

app = Flask(__name__)

#db = Neo4jConnection(url="bolt://localhost:7687", user="neo4j", password="123456789")


#KG = Knowledge_Graph()
#texts = read_from_file("validated_texts.txt")
#db.create_graph(KG=KG, texts=texts, remove_coref=remove_coref)

@app.route('/', methods=["GET"])
def load_main_page():
    return render_template("main.html")

app.run(host="0.0.0.0", port=3000)

