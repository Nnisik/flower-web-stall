// TODO: style component
import {FC} from "react";
import ProductProp from "../../types/ProductProp.ts";

const CartItem:FC<ProductProp> = (props) => {
    return (
        <div key={props.id}>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    );
}

export default CartItem;