import Order from "../../components/Order.tsx";
import OrdersContainer from "../../components/OrdersContainer.tsx";
import useOrderStore from "../../store/useOrderStore.ts";
import EmptyOrderList from "./EmptyOrderList.tsx";

const OrdersHistorySection = () => {
    const { oldOrders } = useOrderStore();
    const isOrderListEmpty: boolean = oldOrders.length == 0;

    return (
        <OrdersContainer header={"Active orders"}>
            {isOrderListEmpty
                ? <EmptyOrderList text={"You don't have any previous orders"}/>
                : <div>
                    {oldOrders.map((order) => (
                        <Order
                            id={order.id}
                            orderDate={order.orderDate}
                            price={order.price}
                            status={order.status}
                            deliveredDate={order.deliveredDate}
                        />
                    ))}
                </div>
            }
        </OrdersContainer>
    );
}

export default OrdersHistorySection;