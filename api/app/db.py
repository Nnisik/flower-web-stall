import asyncio
import os
from datetime import datetime

import asyncpg
from dotenv import load_dotenv

from app.utils import generate_order_number

PRODUCT_CATEGORY_NAMES = {
    '1': 'cat_prod_bouquet',
    '2': 'cat_prod_composition'
}

# Load environment variables from .env file
load_dotenv()

CONN_STRING = os.getenv("DATABASE_URL")
conn = None


async def create_new_product(product_name, product_description, product_category, product_image, product_price):
    global conn

    conn = await asyncpg.connect(CONN_STRING)

    try:
        print("Connection established")

        await conn.execute(
            """INSERT INTO products (
                name, 
                description, 
                category_id, 
                category_name, 
                rating_average,
                rating_review_count,
                image_url, 
                price) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8);""",
            product_name,
            product_description,
            product_category,
            PRODUCT_CATEGORY_NAMES[product_category],
            0,
            0,
            product_image,
            product_price
        )
        print("Inserted a single product.")
        return get_all_products()

    except Exception as e:
        print(f"Exception: ${e}")

    finally:
        if conn:
            await conn.close()


async def get_all_products():
    global conn
    conn = await asyncpg.connect(CONN_STRING)

    try:
        await conn.execute("""
                           CREATE TABLE products (
                               id SERIAL PRIMARY KEY,
                               name VARCHAR(255) NOT NULL,
                               description VARCHAR(255),
                               category_id INT NOT NULL,
                               category_name VARCHAR(255) NOT NULL,
                               rating_average DECIMAL NOT NULL,
                               rating_review_count INT NOT NULL,
                               in_stock BOOLEAN DEFAULT TRUE,
                               image_url VARCHAR(255),
                               price INT NOT NULL
                           );
                       """)
    except Exception as e:
        print(f"Error creating table: {e}")
    finally:
        pass

    try:
        # Fetch all rows
        rows = await conn.fetch("SELECT * FROM products;")

        result = []

        for row in rows:
            result.append({
                "id": row['id'],
                "name": row['name'],
                'description': row['description'],
                'category_id': row['category_id'],
                'category_name': row['category_name'],
                'rating_average': row['rating_average'],
                'rating_review_count': row['rating_review_count'],
                'in_stock': row['in_stock'],
                'image_url': row['image_url'],
                'price': row['price']
            })

        return result

    except Exception as e:
        print(f"DB connection error: {e}")
        return -1

    finally:
        if conn:
            await conn.close()


async def get_product_by_id(product_id):
    global conn

    try:
        conn = await asyncpg.connect(CONN_STRING)
        print("Connection established")

        row = await conn.fetchrow(f"SELECT * FROM products WHERE id = $1;", product_id)
        print(row)
        print(f"id: {row['id']} | name: {row['name'][1:]}")

        result = {
            "id": row['id'],
            "name": row['name'],
            'description': row['description'],
            'category_id': row['category_id'],
            'category_name': row['category_name'],
            'rating_average': row['rating_average'],
            'rating_review_count': row['rating_review_count'],
            'in_stock': row['in_stock'],
            'image_url': row['image_url'],
            'price': row['price']
        }
        return result

    except Exception as e:
        print(f"Exception: {e}")
        return -1

    finally:
        if conn:
            await conn.close()


async def get_all_orders_by_user_id(user_id):
    global conn

    conn = await asyncpg.connect(CONN_STRING)

    try:
        # Fetch all rows
        rows = await conn.fetch(f"SELECT * FROM orders WHERE customer_id = $1;", user_id)

        result = []

        for row in rows:
            result.append({
                "id": row['id'],
                "order_number": row['order_number'],
                'status': row['status'],
                'customer_id': row['customer_id'],
                'total_amount': row['total_amount'],
                'created_at': row['created_at']
            })

        return result

    except Exception as e:
        print(f"Exception: {e}")
        return -1

    finally:
        await conn.close()


async def create_order(order_status, order_customer_id, order_total_amount):
    global conn
    conn = await asyncpg.connect(CONN_STRING)

    try:

        order_number = generate_order_number()

        conn.execute(
            """INSERT INTO orders (
                order_number, 
                status, 
                customer_id, 
                total_amount, 
                created_at) 
                VALUES ($1, $2, $3, $4, $5);""",
            order_number,
            order_status,
            order_customer_id,
            order_total_amount,
            datetime.today().strftime('%Y-%m-%d %H:%M:%S')
        )

        # TODO: add fetching order id from DB

        return 1

    except Exception as e:
        print(f"Error: {e}")

        return -1

    finally:
        await conn.close()


async def create_order_number(order_id, product_id, quantity, unit_price):
    global conn
    conn = await asyncpg.connect(CONN_STRING)

    try:
        conn.execute(
            """INSERT INTO order_items (
                order_id, 
                product_id, 
                quantity, 
                unit_price, 
                created_at) 
                VALUES ($1, $2, $3, $4, $5);""",
            order_id,
            product_id,
            quantity,
            unit_price,
            unit_price * quantity
        )

    except Exception as e:
        print(f"Error: {e}")

    finally:
        await conn.close()