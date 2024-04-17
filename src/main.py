from flask import Flask, render_template, request, jsonify, send_file
from Neo4j.DB_controller import Neo4jConnection
from text_processing.processing_REBEL import Knowledge_Graph, remove_coref
from text_processing.read_from_file import read_from_file
from web_parsing_and_fake_news_detection.write_to_file import write_to_file
from web_parsing_and_fake_news_detection.google_search_vpn import searh_start
#from web_parsing_and_fake_news_detection.google_search_no_vpn import searh_start
import os

app = Flask(__name__)

# вне докера
#db = Neo4jConnection(url="bolt://localhost:7687", user="neo4j", password="123456789")
# в докере
db = Neo4jConnection(url="bolt://neo4j:7687", user="neo4j", password="123456789")
KG = Knowledge_Graph()
UPLOAD_FOLDER = db.get_path()

@app.route('/', methods=["GET"])
def load_main_page():
    return render_template("main.html")

@app.route('/get_news', methods=["POST"])
def show_news():
    title = request.form["title"]
    full_text = searh_start(title)
    write_to_file(full_text, "texts.txt")

    return jsonify({"full_text": full_text})

@app.route('/delete_fakes', methods=["POST"])
def delete_fakes():
    texts = request.get_json()
    validate_texts = {}
    for url in texts:
        if float(texts[url]["fake_probability"]) <= 0.1:
            validate_texts[url] = texts[url]

    write_to_file(validate_texts, "validate_texts.txt")

    return jsonify({"validate_text": validate_texts})

@app.route('/knowledge_graph', methods=["GET", "POST"])
def load_graph_page():
    if request.method == 'GET':
        return render_template("knowledge_graph.html")
    elif request.method == 'POST':
        texts = request.get_json()
        
        #texts = read_from_file("validated_texts.txt")
        db.create_graph(KG=KG, texts=texts, remove_coref=remove_coref)
        return jsonify({"message": "ok"})
    
@app.route('/get_all_graph', methods=["GET"])
def load_graph():
    nodes, edges = db.get_all_graph()
    return jsonify({"nodes": nodes, "edges": edges})

@app.route('/save_graph', methods=['POST'])
def save_graph():
    data = request.get_json()
    nodes = data["nodes"]
    edges = data["edges"]

    db.save_data(nodes, edges)
    return jsonify({"message": "ok"})

@app.route('/export', methods=['GET'])
def export_graph():
    end_path = db.export()
    filt_path = os.path.join(UPLOAD_FOLDER, end_path)
    return send_file(filt_path, as_attachment=True)

@app.route('/import', methods=['POST'])
def import_graph():
    uploaded_file = request.files['file']
    filename = uploaded_file.filename
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    uploaded_file.save(file_path)

    db.import_(filename)
    return jsonify({"message": "ok"})

@app.route('/delete_all_graph', methods=['DELETE'])
def delete_graph():
    db.delete_all_graph()
    return jsonify({"message": "ok"})

@app.route('/last_text', methods=['GET'])
def get_last_text():
    full_text = read_from_file("texts.txt")

    if full_text:
        return jsonify({"full_text": full_text})
    else:
        return jsonify({"full_text": "none"})
    
@app.route('/load_text', methods=['POST'])
def load_text_and_get_graph():
    uploaded_file = request.files['file']
    text = uploaded_file.read().decode("utf-8")

    db.create_graph(KG=KG, texts=text, remove_coref=remove_coref, mode=1)
    return jsonify({"message": "ok"})
    

app.run(host="0.0.0.0", port=3000)

