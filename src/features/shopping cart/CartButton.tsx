import file from "../../assets/images/svg/cart-svgrepo-com.svg"
import styles from "../../styles/styles.module.css";

const CartButton = () => {
    return (
        <button className={styles.cartButton}>
            <img src={file} alt={"Cart logo"} />
        </button>
    );
}

export default CartButton;