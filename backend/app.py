from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    data = [
        {"nombre": "Vanesa", "puesto": "Desarrolladora"},
        {"nombre": "Alfredo", "puesto": "DevOps"},
        {"nombre": "Andrea", "puesto": "Project Manager"},
        {"nombre": "Andrea Cristina", "puesto": "Analista"},
        {"nombre": "Presta", "puesto": "Deployment"}
    ]
    return jsonify(data=data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)