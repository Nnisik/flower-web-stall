import useCart from "./useCart.ts";
import {IProductProps} from "../../types/ProductProps";

describe('UseCart store tests', () => {

    test('Case: should initialize with empty cart', () => {
        const { count, items } = useCart.getState();
        const actual = {
            count: count,
            items: items,
        };
        expect(actual).toEqual({count: 0, items: []});
    });

    test("Case: should add item to cart and increment count", () => {
        const testItems:IProductProps[]  = [];
        testItems.forEach((item) => {
            useCart.getState().add(item);
        });
        const { count, items } = useCart.getState();
        const actual = [count, items];
        expect(actual).toEqual([0, []])
        useCart.getState().empty();
    });

    test('Case: should not mutate original item when adding', () => {
        const testItem:IProductProps = {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: ""}
        const outputItem = [1, [{id: 1, header: "Product 1", description: "", type: "product", price: 15, image: ""}]];
        useCart.getState().add(testItem);
        testItem.price = 60;
        const { count, items } = useCart.getState();
        const actual = [count, items];
        expect(actual).toEqual(outputItem)
        useCart.getState().empty();
    });

    test('Case: should empty cart completely', () => {
        const item:IProductProps = {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",};
        useCart.getState().add(item);
        useCart.getState().empty();
        const { count, items } = useCart.getState();
        const actual = [count, items];
        expect(actual).toEqual([0, []]);
        useCart.getState().empty();
    });

    test('Case: should handle multiple additions', () => {
        const testItems:IProductProps[]  = [
            {id: 1, header: "Product 1", description: "", type: "product", price: 15, image: "",},
            {id: 2, header: "Product 1", description: "", type: "product", price: 15, image: "",},
            {id: 3, header: "Product 1", description: "", type: "product", price: 15, image: "",}
        ];
        testItems.forEach((item) => {
            useCart.getState().add(item);
        });
        const { count, items } = useCart.getState();
        const actual = [count, items];
        expect(actual).toEqual([3, testItems])
        useCart.getState().empty();
    });
});