import asyncio

from flask import jsonify, Blueprint, request
from dotenv import load_dotenv

from app.db import get_product_by_id, get_all_products, get_all_orders_by_user_id
from app.models import Product
from app.utils import format_product_data

load_dotenv()

main = Blueprint('main', __name__)


@main.route('/')
def home():
    return "Professional Flask Setup!"


@main.route('/api/v2/products', method=['GET'])
def get_products():
    data = asyncio.run(get_all_products())

    if data == -1:
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


@main.route('/api/v2/products', methods=['POST'])
def products():
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

    data = asyncio.run(get_all_products())

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


@main.route('/api/v2/products/<int:product_id>', methods=['GET'])
def get_single_product(product_id):
    data = asyncio.run(get_product_by_id(product_id))

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


# FIXME: implement Sessions/JWT for this
@main.route('api/v2/orders/<int:user_id>', method=['GET'])
def get_orders(user_id):
    data = asyncio.run(get_all_orders_by_user_id(user_id))

    if data is -1:
        return jsonify({
            'meta': {
                'status': 'error',
                'code': 404,
                "timestamp": "2026-06-16T12:30:00Z",
                'message': 'Orders were not found',
            },
            'error': {
                "code": "ORDER_NOT_FOUND",
                "details": f"No order exists with user ID {id}, or error occured"
            }
        })

# TODO: format returned data
    return jsonify({
        'meta': {
            'status': 'success',
            'code': 200,
            "timestamp": "2026-06-16T12:30:00Z",
            'message': 'Product retrieved successfully'
        },
        'data': data
    })


@main.route('/favicon.ico', methods=['GET'])
def favicon():
    if request.method == 'GET':
        return '', 204
