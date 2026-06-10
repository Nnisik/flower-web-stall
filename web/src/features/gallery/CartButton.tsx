import file from "../../assets/images/svg/cart-svgrepo-com.svg"
import styles from "../../styles/Cart.module.css";
import {FC} from "react";
import useCart from "../../store/UseCart/useCart.ts";
import {ICartButtonProps} from "../../types/ICartButtonProps";

const CartButton:FC<ICartButtonProps> = (props) => {
    const { add } = useCart();

    const handleClick = () => {
        add(props.elem);
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            <img src={file} alt={"Cart logo"} />
        </button>
    );
}

export default CartButton;