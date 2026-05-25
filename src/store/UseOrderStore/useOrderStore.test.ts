import IOrderProps from "../../types/IOrderProps";
import useOrderStore from "./useOrderStore.ts";

describe('Build new order', () => {

    test('Case: correctly fetches active orders', () => {
        useOrderStore.getState().get();

        const expected:IOrderProps[] = [{
            "id": "1",
            "items": 2,
            "content": [
                {
                    "id": 2,
                    "header": "Solstice Stems",
                    "price": 42,
                    "type": "product",
                    "image": "https://www.twigandvine.com.au/cdn/shop/files/FullSizeRender_ab5f9868-f10b-4ae5-8605-45ec05436f2a.jpg?v=1757909705"
                },
                {
                    "id": 1,
                    "header": "Dawn Bloom",
                    "price": 72,
                    "type": "product",
                    "image": "https://www.floralsilk.co.uk/Images/CategoryBanner/small/bouquets_smallban.jpg"
                }
            ],
            "orderDate": "4-4-2026",
            "status": "approved",
            "price": 114,
            "deliveredDate": ""
        }];
        const actual:IOrderProps[] = useOrderStore.getState().activeOrders;

        expect(actual).toEqual(expected);
        useOrderStore.getState().empty();
    });

    test('Case: correctly fetches previous orders', () => {
        useOrderStore.getState().get();

        const expected:IOrderProps[] = [{
            "id": "2",
            "items": 2,
            "content": [
                {
                    "id": 1,
                    "header": "Dawn Bloom",
                    "price": 72,
                    "type": "product",
                    "image": "https://www.floralsilk.co.uk/Images/CategoryBanner/small/bouquets_smallban.jpg"
                },
                {
                    "id": 2,
                    "header": "Solstice Stems",
                    "price": 42,
                    "type": "product",
                    "image": "https://www.twigandvine.com.au/cdn/shop/files/FullSizeRender_ab5f9868-f10b-4ae5-8605-45ec05436f2a.jpg?v=1757909705"
                }
            ],
            "orderDate": "4-4-2026",
            "status": "delivered",
            "price": 114,
            "deliveredDate": "7-4-2026"
        }];
        const actual:IOrderProps[] = useOrderStore.getState().oldOrders;

        expect(actual).toEqual(expected);
        useOrderStore.getState().empty();
    });
});