import useCart from "../store/useCart.ts";
import {IProductProps} from "../types/ProductProps";

export const calculateFullPrice:()=>number = () => {
    const cartItems:IProductProps[] = useCart.getState().items;
    let orderFullPrice:number = 0;

    cartItems.forEach((item) => {
        orderFullPrice += item.price;
    });

    return orderFullPrice;
}
