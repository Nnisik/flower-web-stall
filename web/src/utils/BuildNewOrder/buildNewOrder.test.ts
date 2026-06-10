import {buildNewOrder} from "./buildNewOrder.ts";
import OrderProps from "../../types/IOrderProps";

describe('Build new order', () => {

    test('Case: create new order', () => {
        let newOrder:{ message: string } | OrderProps;
        newOrder = buildNewOrder(1);

        const testOrder = {
            id: 1,
            items: newOrder.items,
            content: newOrder.content,
            orderDate: newOrder.orderDate,
            price: 0
        }

        const todayDate = new Date();
        const expectedOrder = {
            id: 1,
            items: [],
            content: newOrder.content,
            orderDate: `${todayDate.getDate()}-${todayDate.getMonth()}-${todayDate.getFullYear()}`,
            price: 0
        }

        expect(testOrder).toEqual(expectedOrder);
    });

    test('Case: only positive ID allowed', () => {
        const newOrder:{ message: string } | OrderProps = buildNewOrder(-1);

        expect(newOrder).toEqual({message: "Wrong ID provided"});
    });
});