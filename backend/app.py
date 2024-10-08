from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

with app.app_context():
    db.create_all()


@app.route("/test", methods=["GET"])
def test():
    return jsonify({"message": "Hello World!"})


if __name__ == "__main__":
    app.run(debug=True, port=4000)

