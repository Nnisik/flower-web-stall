// FIXME: props type need to be specified
const ActiveOrder = (props) => {
    return (
        <div>
            <h4>Order {props.orderID}</h4>
            <p>Date: {props.date}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default ActiveOrder;