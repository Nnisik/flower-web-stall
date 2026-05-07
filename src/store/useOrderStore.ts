import {create} from "zustand";
import OrderProps from "../types/OrderProps";
import data from "../assets/json/demoData/orders.data.json";

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
            // since it is vite, it doesn't want to properly work with local JSON file
        },

        get: async () => {

            const active: OrderProps[] = [];
            const old: OrderProps[] = [];

            const ordersData:OrderProps[] = data;

            ordersData.forEach((order) => {
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
        },

        empty: () => {
            set({
                count: 0,
                activeOrders: [],
                oldOrders: []
            });
        },
    };
})

export default useOrderStore;