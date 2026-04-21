import ActiveOrder from "../components/ActiveOrder.tsx";

const ActiveOrdersList = () => {
    return (
        <div>
            <h3>Active orders</h3>
            <div>
                <p>You don't have any active orders</p>
                <div>
                    <button>Catalog</button>
                    <button>Bucket</button>
                </div>
            </div>
            <div>
                <ActiveOrder orderID={2} date={"09.04.2026"} price={0} />
                <ActiveOrder orderID={1} date={"07.04.2026"} price={0} />
            </div>
        </div>
    );
}

export default ActiveOrdersList;