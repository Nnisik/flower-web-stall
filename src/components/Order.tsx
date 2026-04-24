import {FC} from "react";
import OrderProps from "../types/OrderProps";
import styles from "../styles/styles.module.css";

const Order:FC<OrderProps> = (props) => {
    const isDelivered = props.status === 'delivered';
    return (
        <div className={styles.order}>
            <h4>Order {props.id}</h4>
            <p>Order date: {props.orderDate}</p>
            <p>Status: {props.status} </p>
            { isDelivered ? (<p>Delivered: {props.deliveredDate} </p>) : (<></>)}
            <p>{props.price}</p>
        </div>
    );
}

export default Order;