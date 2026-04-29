import styles from "../styles/Order.module.css";
import {ReactNode} from "react";

interface OrderListProps {
    header: string
    children: ReactNode | ReactNode[];
}

const OrderList:FC<OrderListProps> = (props) => {
    return (
        <div className={styles.section}>
            <h3 className={styles.header}>{props.header}</h3>
            {children}
        </div>
    );
}

export default OrderList;