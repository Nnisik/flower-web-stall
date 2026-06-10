from flask import jsonify, Blueprint, request
from dotenv import load_dotenv
import os
import requests

load_dotenv()

main = Blueprint('main', __name__)


@main.route('/')
def home():
    return "Professional Flask Setup!"


@main.route('/api/v2/products', methods=['GET', 'POST'])
def products():
    if request.method == 'GET':
        try:
            return requests.get(f"https://{os.getenv('API_KEY')}.mockapi.io/api/v1/products").json()
        except:
            return jsonify({'message': 'Server error'})
        finally:
            print("GET")

    elif request.method == 'POST':
        product_id = request.form('id')
        return jsonify({
            'message': 'You made a POST request',
            'id': product_id
        })

    else:
        return jsonify({'message': 'This message is not defined yet'})


@main.route('/api/v2/products/<int:order_id>', methods=['GET', 'PUT'])
def single_product():
    if request.method == 'GET':
        pass

    elif request.method == 'PUT':
        updated_user = request.get_json()
        return jsonify({
            'error': "Invalid data",
            'error_code': 400,
            'body': updated_user
        })
