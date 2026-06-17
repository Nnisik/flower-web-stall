def format_product_data(product_data):

    result = {
        "id": product_data['id'],
        "name": product_data['name'],
        'description': product_data['description'],
        'category': {
            'id': product_data['category_id'],
            'name': product_data['category_name']
        },
        'rating': {
            'average': product_data['rating_average'],
            'review_count': product_data['rating_review_count'],
        },
        'in_stock': product_data['in_stock'],
        'image': {
            'url': product_data['image_url'],
            'alt_text': product_data['name']
        }
    }

    return result
