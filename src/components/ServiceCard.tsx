import {FC} from "react";
import styles from "../styles/Gallery.module.css";
import {IProductProps} from "../types/ProductProps";

const ServiceCard:FC<IProductProps> = (props) => {
    return (
        <div className={styles.card}>
            <div>
                <h4>{props.header}</h4>
                <p>{props.description}</p>
            </div>
            <img className={styles.cardImage} src={props.image} alt={props.header} />
        </div>
    );
}

export default ServiceCard;