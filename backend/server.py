from flask import Flask, jsonify, request, current_app
from sqlalchemy import create_engine, text


# db = current_app.database


# def signUp():


def create_app(test_config=None):
    app = Flask(__name__)

    if test_config is None:
        app.config.from_pyfile("config.py")
    else:
        app.config.update(test_config)

    database = create_engine(
        app.config['DB_URL'], max_overflow=0)
    app.database = database

    @app.route('/signup', methods=['POST'])
    def signUp():
        new_user = request.json
        print(request.json)

        return request.json

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
