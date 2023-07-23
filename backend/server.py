from flask import Flask

app = Flask(__name__)


@app.route('/main')
def main():
    return {"members": [{"id": 1, "name": "Duke"},
                        {"id": 2, "name": "mem2"},
                        {"id": 3, "name": "mem3"}]}


if __name__ == "__main__":
    app.run(debug=True)
