import ActiveOrder from "./ActiveOrder.tsx";

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
                <ActiveOrder id={2} orderDate={"09.04.2026"} price={0} />
                <ActiveOrder id={1} orderDate={"07.04.2026"} price={0} />
            </div>
        </div>
    );
}

export default ActiveOrdersList;