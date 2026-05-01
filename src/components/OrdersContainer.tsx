import styles from "../styles/Order.module.css";
import {FC, ReactNode} from "react";

interface OrderListProps {
    header: string
    children: ReactNode | ReactNode[];
}

const OrdersContainer:FC<OrderListProps> = (props) => {
    return (
        <div className={styles.section}>
            <h3 className={styles.header}>{props.header}</h3>
            {props.children}
        </div>
    );
}

export default OrdersContainer;