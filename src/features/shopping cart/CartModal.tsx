import {useCartStore} from "../../store/useCartStore.ts";
import styles from "../../styles/styles.module.css";
import CartList from "./CartList.tsx";
import EmptyCardMessage from "./EmptyCardMessage.tsx";

const CartModal = () => {
    const numberCartItems = useCartStore((s) => s.items.length);

    return (
        <div className={styles.cartModalWindow}>
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