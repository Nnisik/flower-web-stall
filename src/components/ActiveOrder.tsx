import {FC} from "react";

import OrderProps from "../types/OrderProps";

const ActiveOrder:FC<OrderProps> = (props) => {
    return (
        <div>
            <h4>Order {props.id}</h4>
            <p>Date: {props.orderDate}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default ActiveOrder;