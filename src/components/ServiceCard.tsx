import {FC} from "react";
import CardProps from "../types/CardProps";
import styles from "../styles/styles.module.css";

const ServiceCard:FC<CardProps> = (props) => {
    return (
        <div className={styles.card}>
            <div>
                <h4>{props.text}</h4>
                <p>{props.description}</p>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default ServiceCard;