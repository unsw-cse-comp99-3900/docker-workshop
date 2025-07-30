from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/joke", methods=["GET"])
def get_joke():
    """
    Fetch a random joke from an external API using `requests`.
    """
    response = requests.get("https://official-joke-api.appspot.com/random_joke")
    if response.status_code == 200:
        data = response.json()
        return jsonify({
            "setup": data["setup"],
            "punchline": data["punchline"]
        })
    else:
        return jsonify({"error": "Could not fetch a joke"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=6991, debug=True)
