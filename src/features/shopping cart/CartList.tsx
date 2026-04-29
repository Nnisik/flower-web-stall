import CartItem from "./CartItem.tsx";
import styles from "../../styles/styles.module.css";
import useCart from "../../store/useCart.ts";

const CartList = () => {
    const items = useCart((state) => state.items);

    return (
        <div className={styles.cartList}>
            {items.map(item => {
                return <CartItem id={item.id} name={item.name} price={item.price}/>
            })}
        </div>
    );
}

export default CartList;