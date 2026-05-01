import {FC} from "react";
import styles from "../../styles/Gallery.module.css";
import CartButton from "./CartButton.tsx";
import ProductProp from "../../types/ProductProp.ts";

const Card:FC<ProductProp> = (props) => {
    const cardProductInfo:ProductProp = {
        id: props.id,
        header: props.header,
        price: props.price,
        type: "product",
        image: props.image
    }

    console.log(props.image)
    // FIXME: images do not appear
    return (
        <div className={styles.card}>
            <div>
                <div className={styles.card_container}>
                    <div>
                        <h4>{props.header}</h4>
                        <p>${props.price}/Bunch</p>
                    </div>
                    <CartButton elem={cardProductInfo}/>
                </div>
            </div>
            <img
                className={styles.cardImage}
                src={props.image}
                alt={props.header}
            />
        </div>
    );
}

export default Card;