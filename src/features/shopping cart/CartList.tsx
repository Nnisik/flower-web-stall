import CartItem from "./CartItem.tsx";
import styles from "../../styles/Cart.module.css";
import useCart from "../../store/useCart.ts";

const CartList = () => {
    const items = useCart((state) => state.items);

    return (
        <div className={styles.list}>
            {items.map(item => {
                return <CartItem id={item.id} header={item.header} price={item.price} image={item.image} type={item.type}/>
            })}
        </div>
    );
}

export default CartList;