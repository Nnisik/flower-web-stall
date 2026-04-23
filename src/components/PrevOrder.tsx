import OrderProps from "../types/OrderProps";
import {FC} from "react";

const PrevOrder:FC<OrderProps> = (props) => {
    return (
        <div>
            <h4>Order {props.id}</h4>
            <p>Order date: {props.orderDate}</p>
            <p>Status: {props.status} </p>
            <p>Delivered: {props.deliveredDate} </p>
            <p>{props.price}</p>
        </div>
    );
}

export default PrevOrder;