import file from "../../assets/images/svg/cart-svgrepo-com.svg"
import styles from "../../styles/Cart.module.css";
import {FC} from "react";
import ProductProp from "../../types/ProductProp.ts";
import useCart from "../../store/useCart.ts";

interface ICartButtonProps {
    elem: ProductProp;
}

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