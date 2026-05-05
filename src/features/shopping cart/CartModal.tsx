import styles from "../../styles/Cart.module.css";
import CartList from "./CartList.tsx";
import EmptyCardMessage from "./EmptyCardMessage.tsx";
import useCart from "../../store/useCart.ts";
import useOrderStore from "../../store/useOrderStore.ts";

const CartModal = () => {
    const handleOrder = () => {
        useOrderStore.getState().add();
        console.log("Order created");
    }

    const count = useCart((state) => state.count);

    return (
        <div className={styles.modal}>
            <h1>Cart</h1>
            {count === 0
                ? <EmptyCardMessage />
                : <CartList />
            }
            <button className={styles.orderButton} onClick={handleOrder}>Order</button>
        </div>
    );
}

export default CartModal;
// TODO: split components into diff files