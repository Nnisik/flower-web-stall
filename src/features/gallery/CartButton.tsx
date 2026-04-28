import file from "../../assets/images/svg/cart-svgrepo-com.svg"
import styles from "../../styles/styles.module.css";
import {FC} from "react";
import {useCartStore} from "../../store/useCartStore.ts";
import CardProps from "../../types/CardProps";
import ProductProp from "../../types/ProductProp.ts";

interface ICartButtonProps {
    elem: CardProps;
}

const CartButton:FC<ICartButtonProps> = (props) => {
    const { addItem } = useCartStore();

    const handleClick = () => {
        const newProduct:ProductProp = {
            id: props.elem.id,
            name: props.elem.text,
            price: props.elem.price
        };

        addItem(newProduct)
    }

    return (
        <button className={styles.cartButton} onClick={handleClick}>
            <img src={file} alt={"Cart logo"} />
        </button>
    );
}

export default CartButton;