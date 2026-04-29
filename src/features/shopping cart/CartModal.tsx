import styles from "../../styles/Cart.module.css";
import CartList from "./CartList.tsx";
import EmptyCardMessage from "./EmptyCardMessage.tsx";
import useCart from "../../store/useCart.ts";

const CartModal = () => {
    const numberCartItems = useCart((s) => s.items.length);

    return (
        <div className={styles.modal}>
            <h1>Cart</h1>
            {numberCartItems === 0
                ? <EmptyCardMessage />
                : <CartList />
            }
        </div>
    );
}

export default CartModal;
// TODO: split components into diff files