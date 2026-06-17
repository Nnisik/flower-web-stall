import asyncio
import os

import asyncpg
from dotenv import load_dotenv

from app.constants import PRODUCT_CATEGORY_NAMES

# Load environment variables from .env file
load_dotenv()

CONN_STRING = os.getenv("DATABASE_URL")
conn = None


async def create_new_product(product_name, product_description, product_category, product_image):
    global conn

    try:
        conn = await asyncpg.connect(CONN_STRING)
        print("Connection established")

        try:
            await conn.execute("""
                CREATE TABLE products (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    description VARCHAR(255),
                    category_id SERIAL NOT NULL,
                    category_name VARCHAR(255),
                    rating_average DECIMAL,
                    rating_review_count SERIAL,
                    in_stock BOOLEAN DEFAULT TRUE,
                    image_url VARCHAR(255) NOT NULL
                );
            """)
            print("Table successfully created")

        except Exception as e:
            print(f"Error creating table : ${e}")

        finally:
            try:
                await conn.execute(
                    "INSERT INTO products (name, description, category_id, category_name, rating_average ,rating_review_count ,image_url) VALUES ($1, $2, $3, $4, $5, $6, $7);",
                    product_name,
                    product_description,
                    product_category,
                    PRODUCT_CATEGORY_NAMES[product_category],
                    0,
                    0,
                    product_image,
                )
                print("Inserted a single product.")
                return get_all_products()

            except Exception as e:
                print(f"Error inserting into a table : ${e}")

            finally:
                pass

    except Exception as e:
        print(f"Exception: ${e}")

    finally:
        if conn:
            await conn.close()


async def get_all_products():
    global conn

    try:
        conn = await asyncpg.connect(CONN_STRING)
        print("Connection established")

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
                'image_url': row['image_url']
            })

        return result

    except Exception as e:
        print(f"DB connection error: {e}")
        return -1

    finally:
        if conn:
            await conn.close()


async def get_product_by_id(id):
    global conn

    try:
        conn = await asyncpg.connect(CONN_STRING)
        print("Connection established")

        row = await conn.fetchrow(f"SELECT * FROM products WHERE id = $1;", id)
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
            'image_url': row['image_url']
        }
        return result

    except Exception as e:
        print(f"Exception: {e}")
        return -1

    finally:
        if conn:
            await conn.close()

# asyncio.run(create_new_product())
