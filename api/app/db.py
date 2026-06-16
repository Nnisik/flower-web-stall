import asyncio
import os

import asyncpg
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

CONN_STRING = os.getenv("DATABASE_URL")
conn = None

async def create_new_product():
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
            pass

        try:
            await conn.execute(
                "INSERT INTO products (name, category_id, category_name, rating_average ,rating_review_count ,image_url) VALUES ($1, $2, $3, $4, $5, $6);",
                "The Catcher in the Rye",
                1,
                "cat_prod",
                0,
                0,
                "image url",
            )
            print("Inserted a single product.")

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

        for row in rows:
            print(f"id: {row['id']} | name: {row['name'][1:]}")

        return rows

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

        row = await conn.fetchrow(f"SELECT * FROM products WHERE id = $1;", 1)
        print(row)
        print(f"id: {row['id']} | name: {row['name'][1:]}")
        return row

    except Exception as e:
        print(f"Exception: {e}")
        return -1

    finally:
        if conn:
            await conn.close()


# asyncio.run(create_new_product())
# asyncio.run(get_all_products())