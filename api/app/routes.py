from flask import jsonify, Blueprint, request
from dotenv import load_dotenv

from app.db import get_product_by_id, get_all_products, create_new_product
from app.models import Product
from app.utils import format_product_data

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
        else:

            response_data = []

            for data_elem in data:
                response_data.append(format_product_data(data_elem))

            return jsonify({
                'meta': {
                    'status': 'success',
                    'code': 200,
                    "timestamp": "2026-06-16T12:30:00Z",
                    'message': 'Product retrieved successfully'
                },
                'data': response_data
            })

    elif request.method == 'POST':

        name = request.json['name']
        description = request.json['description']
        category = request.json['category']
        image = request.json['image']

        new_product = Product(
            -1,
            name,
            description,
            category,
            0,
            0,
            image
        )
        new_product.add_new_product()

        data = get_all_products()

        response_data = []

        for data_elem in data:
            response_data.append(format_product_data(data_elem))

        return jsonify({
            'meta': {
                'status': 'success',
                'code': 201,
                "timestamp": "2026-06-16T12:30:00Z",
                'message': 'Product created successfully'
            },
            'data': response_data
        })

    else:
        return jsonify({
            'meta': {
                'status': 'error',
                'code': 500,
                "timestamp": "2026-06-16T12:30:00Z",
                'message': 'Request not identified',
            },
            'error': {
                "code": "PRODUCT_NOT_FOUND",
                "details": f"Error"
            }
        })


@main.route('/api/v2/products/<int:order_id>', methods=['GET', 'PUT'])
def single_product(id):
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
            'data': format_product_data(data)
        })

    elif request.method == 'PUT':
        updated_user = request.get_json()
        return jsonify({
            'error': "Invalid data",
            'error_code': 400,
            'body': updated_user
        })
