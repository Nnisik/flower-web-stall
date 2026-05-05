import OrderProps from "../types/OrderProps";
import useCart from "../store/useCart.ts";
import {calculateFullPrice} from "./calculateOrderFullPrice.ts";

export const buildNewOrder = (orderID:number) => {
    const todayDate = new Date();
    const orderStatusOptions:string[] = ['pending payment', 'approved', 'delivering', 'delivered', 'canceled'];
    const orderStatus:string = orderStatusOptions[Math.floor(Math.random() * orderStatusOptions.length)]

    let deliveredDate = "";
    if (orderStatus == 'delivered') {
        const date = todayDate.getDate() + 3;
        deliveredDate = `${date}-${todayDate.getMonth()}-${todayDate.getFullYear()}`
    } else if (orderStatus == 'canceled') {
        deliveredDate = `${todayDate.getDate()}-${todayDate.getMonth()}-${todayDate.getFullYear()}`
    }

    const newOrder:OrderProps = {
        id: orderID,
        items: useCart.getState().count,
        content: useCart.getState().items,
        orderDate: `${todayDate.getDate()}-${todayDate.getMonth()}-${todayDate.getFullYear()}`,
        status: orderStatus,
        price: calculateFullPrice(),
        deliveredDate: deliveredDate
    };

    return newOrder;
}