from app.db import create_new_product


class Product:

    def __init__(self, id, name, description, category, rating_average, rating_review_count, image, price):
        self.__id = id
        self.name = name
        self.description = description
        self.category = category
        self.rating_average = rating_average
        self.rating_review_count = rating_review_count
        self.image = image
        self.price = price

    def add_new_product(self):
        create_new_product(self.name, self.description, self.category, self.image, self.price)


class Order:
    pass
