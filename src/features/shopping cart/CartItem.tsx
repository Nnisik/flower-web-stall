import {FC} from "react";
import styles from "../../styles/Cart.module.css";
import file from "../../assets/images/svg/Bin-1--Streamline-Ultimate.svg";
import {IProductProps} from "../../types/ProductProps";

const CartItem:FC<IProductProps> = (props) => {
    const handleDelete = () => {
        alert("Button clicked")
    }

    const quantity = 1;

    return (
        <div className={styles.cartItem} key={props.id}>
            <img src={props.image} alt={props.header}/>
            <div>
                <div className={styles.cartContainer}>
                    <h3 className={styles.header}>{props.header}</h3>
                    <p className={styles.text}>Quantity: {quantity}</p>
                    <p className={styles.text}>Price: {props.price}</p>
                    <p className={styles.text}>Final price: {quantity * props.price}</p>
                </div>
                <button className={styles.delete} onClick={handleDelete}>
                    <img src={file} alt={"Bin logo"} />
                </button>
            </div>
        </div>
    );
}

export default CartItem;