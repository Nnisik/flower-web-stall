import PrevOrder from "../components/PrevOrder.tsx";

const OrdersHistorySection = () => {
    return (
        <div>
            <h3>Orders history</h3>
            <div>
                <PrevOrder orderID={2} date={"09.04.2026"} price={0} />
                <PrevOrder orderID={1} date={"07.04.2026"} price={0} />
            </div>
        </div>
    );
}

export default OrdersHistorySection;