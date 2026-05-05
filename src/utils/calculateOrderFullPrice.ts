import ProductProp from "../types/ProductProp.ts";
import useCart from "../store/useCart.ts";

export const calculateFullPrice:()=>number = () => {
    const cartItems:ProductProp[] = useCart.getState().items;
    let orderFullPrice:number = 0;

    cartItems.forEach((item) => {
        orderFullPrice += item.price;
    });

    return orderFullPrice;
}
