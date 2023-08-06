from models import db


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_account = db.Column(db.String(30), nullable=False)
    user_pwd = db.Column(db.String(30), nullabe=False)
    user_name = db.Column(db.String(10), nullabe=False)
    user_sex = db.Column(db.String(10))

    def __repr__(self):
        return f'<User user_name={self.user_name}>'
