"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
import json

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def handle_login():
    data = request.data
    data_decode = json.loads(data)
    user = User.query.filter_by(**data_decode).first()
    if user is None:
        response_body = {
            "message": "Datos no validos"
        }
        return jsonify(response_body), 400
    else: 
        access_token = create_access_token(identity=user.id)
        response_body = {
            "message": "Inicio de sesion exitoso",
            "token": access_token
        }
        return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_signup():

    data = request.data
    data_decode = json.loads(data)
    newUser = User(**data_decode)
    user = User.query.filter_by(username=newUser.username,password=newUser.password).first()
    if user is None:
        db.session.add(newUser)
        db.session.commit()
        access_token = create_access_token(identity=newUser.id)
        response_body = {
            "message": "Usuario creado con exito",
            "token":access_token
        }
        return jsonify(response_body), 200
    else :
        response_body = {
            "message": "Error, Usuario ya existe"
        }
        return jsonify(response_body), 400