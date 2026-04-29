import {FC} from "react";
import styles from "../styles/Gallery.module.css";
import CardProps from "../types/CardProps";
import CartButton from "../features/gallery/CartButton.tsx";

const Card:FC<CardProps> = (props) => {
    const cardProductInfo:CardProps = {
        id: props.id,
        text: props.text,
        price: props.price
    }

    return (
        <div className={styles.card}>
            <div>
                <div>
                    <h4>{props.text}</h4>
                    <CartButton elem={cardProductInfo}/>
                </div>
                <p>${props.price}/Bunch</p>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default Card;