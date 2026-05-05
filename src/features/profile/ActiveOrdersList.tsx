import EmptyOrderList from "./EmptyOrderList.tsx";
import OrdersContainer from "../../components/OrdersContainer.tsx";
import useOrderStore from "../../store/useOrderStore.ts";
import Order from "../../components/Order.tsx";
import LinkComp from "../../components/LinkC.tsx";

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
                        activeOrders.map((order, key) => (
                        <Order
                            key={key}
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