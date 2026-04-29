import Order from "../../components/Order.tsx";
import OrderList from "../../components/OrderList.tsx";

const OrdersHistorySection = () => {
    return (
        <OrderList header={"Orders history"}>
            <div>
                <Order id={2} orderDate={"09.04.2026"} price={0} status={'delivered'} />
                <Order id={1} orderDate={"07.04.2026"} price={0} status={'delivered'} />
            </div>
        </OrderList>
    );
}

export default OrdersHistorySection;