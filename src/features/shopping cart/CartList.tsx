import CartItem from "./CartItem.tsx";
import styles from "../../styles/Cart.module.css";
import useCart from "../../store/useCart.ts";

const CartList = () => {
    const items = useCart((state) => state.items);

    return (
        <div className={styles.list}>
            {items.map(item => {
                return <CartItem id={item.id} name={item.name} price={item.price}/>
            })}
        </div>
    );
}

export default CartList;