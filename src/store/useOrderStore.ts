import {create} from "zustand/index";
import OrderProps from "../types/OrderProps";
import {getOrder, postOrder} from "../services/orderService.ts";

const initialState = {
    count: 0,
    activeOrders: [],
    oldOrders: []
}

interface IOrderState {
    count: number;
    activeOrders: OrderProps[];
    oldOrders: OrderProps[];

    add: (id:number, date:string, price:number) => void;
    get: () => void;
    empty: () => void;
}

const useOrderStore= create<IOrderState>((set) => {
    return {
        count: 0,
        activeOrders: [],
        oldOrders: [],
        add: (id=-1, date="", price=1000) => {
            postOrder(id, date, price)
        },
        get: () => {
            getOrder()
        },
        empty: () => {
            set(() => ({
                count: initialState.count,
                activeOrders: initialState.activeOrders,
                oldOrders: initialState.oldOrders
            }))
        }
    };
})

export default useOrderStore;