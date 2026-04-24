import Order from "../../components/Order.tsx";

const OrderLIst = () => {
    return (
        <div>
            <Order id={2} orderDate={"09.04.2026"} price={0} status={'delivering'} />
            <Order id={1} orderDate={"07.04.2026"} price={0} status={'delivering'} />
        </div>
    );
}

export default OrderLIst;