import {FC} from "react";

import styles from "../styles/styles.module.css";

import CardProps from "../types/CardProps";

const Card:FC<CardProps> = (props) => {
    return (
        <div className={styles.card}>
            <div>
                <h4>{props.text}</h4>
                <p>${props.price}/Bunch</p>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default Card;