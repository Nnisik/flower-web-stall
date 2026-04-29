import EmptyOrderList from "../features/profile/EmptyOrderList.tsx";
import OrderLIst from "../features/profile/OrderLIst.tsx";
import OrderProps from "../types/OrderProps";
import {FC} from "react";
import OrderList from "./OrderList.tsx";

// TODO: separate repeated content in separate component
const ActiveOrdersList: FC<OrderProps[]> = (props) => {
    const isOrderListEmpty: boolean = props.length !== 0;

    return (
        <OrderList header={"Active orders"}>
            {isOrderListEmpty
                ? <EmptyOrderList/>
                : <OrderLIst/>
            }
        </OrderList>
    );
}

export default ActiveOrdersList;