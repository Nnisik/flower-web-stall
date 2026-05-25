import ProductProp from "../types/ProductProps.d.ts";
import useCart from "../store/useCart.ts";

export const calculateFullPrice:()=>number = () => {
    const cartItems:ProductProp[] = useCart.getState().items;
    let orderFullPrice:number = 0;

    cartItems.forEach((item) => {
        orderFullPrice += item.price;
    });

    return orderFullPrice;
}
