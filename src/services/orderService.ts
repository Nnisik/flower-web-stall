import useOrderStore from "../store/useOrderStore.ts";
import OrderProps from "../types/OrderProps";

export const getOrder = async () => {
    // TODO: add setLoading
    // TODO: add setError
    fetch(`https://${import.meta.env.API_TOKEN}.mockapi.io/api/v1/order`, {
        method: "GET",
        headers: {'content-type':'application/json'},
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(ordersJSON => {

            ordersJSON.map((order:OrderProps) => {
                count += 1;
                if (order.status === "delivered" || order.status === "canceled") {
                    oldOrders.push(order);
                }
                else {
                    activeOrders.push(order);
                }
            })
        })
        .catch(error => {
            console.log(`ERROR: ${error}`)
        })
}

export const postOrder = (id:number, date:string, price:number) => {
    const newOrder:OrderProps = {
        id: id,
        orderDate: date,
        status: 'approved',
        deliveredDate: "",
        price: price
    };

    fetch(`https://${import.meta.env.API_TOKEN}.mockapi.io/api/v1/order`, {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(newOrder)
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(ordersJSON => {
            empty();

            ordersJSON.map((order:OrderProps) => {
                count += 1;
                if (order.status === "delivered" || order.status === "canceled") {
                    oldOrders.push(order);
                }
                else {
                    activeOrders.push(order);
                }
            });
        })
}

/*
// UPDATE EXISTING
fetch('https://PROJECT_TOKEN.mockapi.io/tasks/1', {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify({completed: true})
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
}).catch(error => {
  // handle error
})
*/


let { count, activeOrders, oldOrders, empty } = useOrderStore();