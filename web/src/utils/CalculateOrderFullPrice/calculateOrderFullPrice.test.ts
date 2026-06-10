import {IProductProps} from "../../types/ProductProps";
import useCart from "../../store/UseCart/useCart.ts";
import {calculateFullPrice} from "./calculateOrderFullPrice.ts";

describe('Build new order', () => {

    test('Case: calculate sum of prices of cart items', () => {
        const testItems:IProductProps[]  = [
            {
                "header": "Dawn Bloom",
                "description": "description 1",
                "image": "https://www.floralsilk.co.uk/Images/CategoryBanner/small/bouquets_smallban.jpg",
                "price": 72,
                "type": "product",
                "id": 1
            }
        ];

        testItems.forEach((item) => {
            useCart.getState().add(item);
        });

        const orderSum:number = calculateFullPrice();
        expect(orderSum).toEqual(testItems[0].price);
        useCart.getState().empty();
    });

    test('Case: returns 0 if cart is empty', () => {
        if (!(useCart.getState().count === 0)) {
            useCart.getState().empty();
        }

        const orderSum:number = calculateFullPrice();
        expect(orderSum).toEqual(0);
    });
});