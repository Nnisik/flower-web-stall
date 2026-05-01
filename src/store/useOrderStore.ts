import {create} from "zustand";
import OrderProps from "../types/OrderProps";

interface IOrderState {
    activeOrders: OrderProps[];
    oldOrders: OrderProps[];

    loading: boolean,
    error: string | null,

    add: (id:number, date:string, price:number) => Promise<void>;
    get: () => Promise<void>;
    empty: () => void;
}

const useOrderStore= create<IOrderState>((set) => {
    return {
        activeOrders: [],
        oldOrders: [],

        loading: false,
        error: null,

        // FIXME: request returns code 500
        add: async (id, date, price) => {
            try {
                const newOrder: OrderProps = {
                    id,
                    orderDate: date,
                    status: "approved",
                    deliveredDate: "",
                    price
                };

                const res = await fetch(`https://${import.meta.env.API_TOKEN}.mockapi.io/api/v1/order`, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(newOrder)
                });

                if (!res.ok) {
                    throw new Error("Post failed");
                }

                const createdOrder: OrderProps = await res.json();

                set((state) => ({
                    activeOrders: [...state.activeOrders, createdOrder]
                }));

            } catch (err:any) {
                console.log(err);
            }
        },

        // FIXME: request returns code 500
        get: async () => {
            set({ loading: true, error: null });

            try {
                const res = await fetch(`https://${import.meta.env.API_TOKEN}.mockapi.io/api/v1/order`)

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
                    activeOrders: active,
                    oldOrders: old
                });
            } catch (err:any) {
                set({ error: err.message, loading: false });
            }
        } ,

        empty: () => {
            set({
                activeOrders: [],
                oldOrders: []
            });
        }
    };
})

export default useOrderStore;