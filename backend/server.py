from flask import Flask
import pymysql

app = Flask(__name__)

# Mysql 연결 정보


def connect_db():
    return pymysql.connect(
        user='root',
        passwd='123456',
        host='localhost',
        db='mydb',
        charset='utf8',
    )


@app.route('/main')
def main():
    try:
        # db연결
        connection = connect_db()

        return 0

    except Exception as e:
        return print('main error')


if __name__ == "__main__":
    app.run(debug=True)
