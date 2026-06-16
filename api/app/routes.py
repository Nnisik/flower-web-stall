from flask import jsonify, Blueprint, request
from dotenv import load_dotenv
import os
import requests

from app.db import get_product_by_id, get_all_products

load_dotenv()

main = Blueprint('main', __name__)


@main.route('/')
def home():
    return "Professional Flask Setup!"


@main.route('/api/v2/products', methods=['GET', 'POST'])
def products():
    if request.method == 'GET':
        data = get_all_products()

        if data is -1:
            return jsonify({
                'meta': {
                    'status': 'error',
                    'code': 404,
                    "timestamp": "2026-06-16T12:30:00Z",
                    'message': 'Product not found',
                },
                'error': {
                    "code": "PRODUCT_NOT_FOUND",
                    "details": f"No product found"
                }
            })


        # TODO: response formation into a JSON list format

        return jsonify({
            'meta': {
                'status': 'success',
                'code': 200,
                "timestamp": "2026-06-16T12:30:00Z",
                'message': 'Product retrieved successfully'
            },
            'data': [{
                "id": data['id'],
                "name": data['name'],
                'description': data['description'],
                'category': {
                    'id': data['category_id'],
                    'name': data['category_name']
                },
                'rating': {
                    'average': data['rating_average'],
                    'review_count': data['rating_review_count'],
                },
                'in_stock': data['id'],
                'image': {
                    'url': data['id'],
                    'alt_text': data['name']
                }
            }]
        })

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
        data = get_product_by_id(id)

        if data is -1:
            return jsonify({
                'meta': {
                    'status': 'error',
                    'code': 404,
                    "timestamp": "2026-06-16T12:30:00Z",
                    'message': 'Product not found',
                },
                'error': {
                    "code": "PRODUCT_NOT_FOUND",
                    "details": f"No product exists with id {id}"
                }
            })

        return jsonify({
            'meta': {
                'status': 'success',
                'code': 200,
                "timestamp": "2026-06-16T12:30:00Z",
                'message': 'Product retrieved successfully'
            },
            'data': {
                "id": data['id'],
                "name": data['name'],
                'description': data['description'],
                'category': {
                    'id': data['category_id'],
                    'name': data['category_name']
                },
                'rating': {
                    'average': data['rating_average'],
                    'review_count': data['rating_review_count'],
                },
                'in_stock': data['id'],
                'image': {
                    'url': data['id'],
                    'alt_text': data['name']
                }
            }
        })

    elif request.method == 'PUT':
        updated_user = request.get_json()
        return jsonify({
            'error': "Invalid data",
            'error_code': 400,
            'body': updated_user
        })
