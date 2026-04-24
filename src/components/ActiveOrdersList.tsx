import styles from "../styles/styles.module.css";
import EmptyOrderList from "../features/profile/EmptyOrderList.tsx";
import OrderLIst from "../features/profile/OrderLIst.tsx";
import OrderProps from "../types/OrderProps";
import {FC} from "react";

const ActiveOrdersList: FC<OrderProps[]> = (props) => {
    const isOrderListEmpty: boolean = props.length !== 0;

    return (
        <div className={styles.orderSection}>
            <h3>Active orders</h3>
            {isOrderListEmpty ? (<EmptyOrderList/>) : (<OrderLIst/>)}
        </div>
    );
}

export default ActiveOrdersList;