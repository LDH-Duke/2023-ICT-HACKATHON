# from dotenv import load_dotenv
# import os
# load_dotenv()


# class Config:
#     SQLALCHEMY_DATABASE_URI = f"mysql://{os.getenv('DB_USER')}:" \
#                               f"{os.getenv('DB_PWD')}@" \
#                               f"{os.getenv('DB_HOST')}:" \
#                               f"{os.getenv('DB_PORT')}/" \
#                               f"{os.getenv('DB_NAME')}?charset=utf8"


# development_config = Config()

db = {
    'user': 'root',
    'password': '123456',
    'host': 'localhost',
    'port': 3306,
    'database': 'mydb'
}

DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
