import styles from "../styles/Order.module.css";
import {FC} from "react";
import {IOrderListProps} from "../types/IOrderListProps";

const OrdersContainer:FC<IOrderListProps> = (props) => {
    return (
        <div className={styles.section}>
            <h3 className={styles.header}>{props.header}</h3>
            {props.children}
        </div>
    );
}

export default OrdersContainer;