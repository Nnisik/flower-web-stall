import {create} from "zustand";
import OrderProps from "../../types/IOrderProps";
import useCart from "../UseCart/useCart.ts";
import {buildNewOrder} from "../../utils/BuildNewOrder/buildNewOrder.ts";
import {IOrderState} from "../../types/IOrderStore";

const useOrderStore= create<IOrderState>((set) => {
    return {
        count: 0,
        activeOrders: [],
        oldOrders: [],

        loading: false,
        error: false,

        add: async () => {
            set({
                loading: true,
            });

            if (useCart.getState().count == 0) {
                throw new Error("Error: cart is empty");
            }
            else {
                try {
                    const res = await fetch(`https://${import.meta.env.VITE_API_TOKEN}.mockapi.io/api/v1/order`, {
                        method: "POST",
                        headers: {"content-type": "application/json"},
                        body: JSON.stringify(buildNewOrder(useCart.getState().count + 1))
                    });

                    if (!res.ok) {
                        set({
                            loading: false,
                            error: true
                        });
                        console.error(`Error ${res.status} - POST failed - ${res.body}`);
                    }

                    useCart.getState().empty();

                    await useOrderStore.getState().get();

                } catch (err) {
                    set({
                        loading: false,
                        error: true
                    });
                    console.error(err);
                }
            }
        },

        get: async () => {
            set({
                loading: true,
            });

            try {
                const res = await fetch(`https://${import.meta.env.VITE_API_TOKEN}.mockapi.io/api/v1/order`)

                if (!res.ok) {
                    console.error(`Error ${res.status} - fetch failed - ${res.body}`);
                }

                const data: OrderProps[] = await res.json();

                const active: OrderProps[] = [];
                const old: OrderProps[] = [];

                data.forEach((order) => {
                    if (order.status === "delivered" || order.status === "canceled") {
                        old.push(order);
                    } else {
                        active.push(order);
                    }
                });

                set({
                    count: old.length + active.length,
                    activeOrders: active,
                    oldOrders: old,

                    error: false,
                    loading: false
                });
            } catch (err) {
                console.error(err);
            }
        },

        empty: () => {
            set({
                count: 0,
                activeOrders: [],
                oldOrders: [],

                error: false,
                loading: false
            });
        },
    };
})

export default useOrderStore;