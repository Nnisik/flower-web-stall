import EmptyOrderList from "../features/profile/EmptyOrderList.tsx";
import OrdersContainer from "./OrdersContainer.tsx";
import useOrderStore from "../store/useOrderStore.ts";
import Order from "./Order.tsx";
import LinkComp from "./LinkC.tsx";

// TODO: separate repeated content in separate component
const ActiveOrdersList = () => {
    const { activeOrders } = useOrderStore();

    return (
        <OrdersContainer header={"Active orders"}>
            {activeOrders.length == 0
                ? <EmptyOrderList text={"You don't have any active orders"}>
                    <LinkComp to={"/gallery"} text={"Gallery"} />
                </EmptyOrderList>
                : <div>
                    {
                        activeOrders.map((order) => (
                        <Order
                            id={order.id}
                            orderDate={order.orderDate}
                            price={order.price}
                            status={order.status}
                        />
                    ))}
                </div>
            }
        </OrdersContainer>
    );
}

export default ActiveOrdersList;