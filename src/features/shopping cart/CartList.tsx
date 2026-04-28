import {useState} from "react";
import {useCartStore} from "../../store/useCartStore.ts";
import CartItem from "./CartItem.tsx";

const CartList = () => {
    const [cart] = useState(useCartStore((s) => s.items));

    return (
        <div>
            {cart.map(item => {
                return <CartItem id={item.id} name={item.name} price={item.price}/>
            })}
        </div>
    );
}

export default CartList;