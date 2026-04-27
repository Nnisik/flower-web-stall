import {useCartStore} from "../../store/cart/useCart.ts";
import {FC} from "react";
import ProductProp from "../../types/ProductProp.ts";
import styles from "../../styles/styles.module.css";

const CartItem:FC<ProductProp> = (props) => {
    return (
        <div key={props.id}>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    );
}

const EmptyCardMessage = () => {
    return (
        <></>
    );
}

const CartList = () => {
    const cart = useCartStore((s) => s.items);

    return (
        <div>
            {cart.map(item => {
                return <CartItem id={item.id} name={item.name} price={item.price}/>
            })}
        </div>
    );
}

const CartModal = () => {
    const numberCartItems = useCartStore((s) => s.totalItems);

    return (
        <div className={styles.cartModalWindow}>
            {numberCartItems === 0
                ? <EmptyCardMessage />
                : <CartList />
            }
        </div>
    );
}

export default CartModal;