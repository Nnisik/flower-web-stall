import PrevOrder from "../components/PrevOrder.tsx";

const OrdersHistorySection = () => {
    return (
        <div>
            <h3>Orders history</h3>
            <div>
                <PrevOrder id={2} orderDate={"09.04.2026"} price={0} />
                <PrevOrder id={1} orderDate={"07.04.2026"} price={0} />
            </div>
        </div>
    );
}

export default OrdersHistorySection;