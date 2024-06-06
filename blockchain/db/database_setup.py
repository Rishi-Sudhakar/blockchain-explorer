from flask import Flask
from db.models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blockchain.db'
db.init_app(app)

with app.app_context():
    db.create_all()
