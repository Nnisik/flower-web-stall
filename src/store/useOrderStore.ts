import {create} from "zustand";
import OrderProps from "../types/OrderProps";
import {buildNewOrder} from "../utils/buildNewOrder.ts";
import useCart from "./useCart.ts";

interface IOrderState {
    count: number,
    activeOrders: OrderProps[];
    oldOrders: OrderProps[];

    add: () => Promise<void>;
    get: () => Promise<void>;
    empty: () => void;
}

const useOrderStore= create<IOrderState>((set) => {
    return {
        count: 0,
        activeOrders: [],
        oldOrders: [],

        add: async () => {
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
                        throw new Error("Post failed");
                    }
                    
                    useCart.getState().empty();

                    await useOrderStore.getState().get();

                } catch (err:any) {
                    throw new Error(err)
                }
            }
        },

        get: async () => {

            try {
                const res = await fetch(`https://${import.meta.env.VITE_API_TOKEN}.mockapi.io/api/v1/order`)

                if (!res.ok) {
                    throw new Error("Fetch failed");
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
                    oldOrders: old
                });
            } catch (err:any) {
                throw new Error(err)
            }
        },

        empty: () => {
            set({
                count: 0,
                activeOrders: [],
                oldOrders: []
            });
        }
    };
})

export default useOrderStore;