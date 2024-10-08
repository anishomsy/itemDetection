from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins
db = SQLAlchemy(app)

with app.app_context():
    db.create_all()


@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "Hello World!"})

if __name__ == '__main__':
    app.run(debug=True, port=4000)