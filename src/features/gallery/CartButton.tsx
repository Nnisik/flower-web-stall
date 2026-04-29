import file from "../../assets/images/svg/cart-svgrepo-com.svg"
import styles from "../../styles/styles.module.css";
import {FC} from "react";
import CardProps from "../../types/CardProps";
import ProductProp from "../../types/ProductProp.ts";
import useCart from "../../store/useCart.ts";

interface ICartButtonProps {
    elem: CardProps;
}

const CartButton:FC<ICartButtonProps> = (props) => {
    const { items, add } = useCart();

    const handleClick = () => {
        const newProduct:ProductProp = {
            id: props.elem.id,
            name: props.elem.text,
            price: props.elem.price
        };

        add(newProduct);
        console.log(items);

    }

    return (
        <button className={styles.cartButton} onClick={handleClick}>
            <img src={file} alt={"Cart logo"} />
        </button>
    );
}

export default CartButton;