import styles from "../../styles/Cart.module.css";
import CartList from "./CartList.tsx";
import EmptyCardMessage from "./EmptyCardMessage.tsx";
import useCart from "../../store/UseCart/useCart.ts";
import useOrderStore from "../../store/UseOrderStore/useOrderStore.ts";

const CartLoadingMessage = () => {
    return (
        <p>Creating an order</p>
    );
}

const CartErrorMessage = () => {
    return (
        <p>Error</p>
    );
}

const CartModal = () => {
    const handleOrder = () => {
        useOrderStore.getState().add();
        console.log("Order created");
    }

    const count = useCart((state) => state.count);

    const { loading, error } = useOrderStore();

    return (
        <>
            {
                loading ?
                    <CartLoadingMessage/> :
                    error ?
                        <CartErrorMessage /> :
                        <div className={styles.modal}>
                            <h1>Cart</h1>
                            {count === 0
                                ? <EmptyCardMessage />
                                : <CartList />
                            }
                            <button className={styles.orderButton} onClick={handleOrder}>Order</button>
                        </div>
            }
        </>
    )
}

export default CartModal;