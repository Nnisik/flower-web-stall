import OrderProps from "./IOrderProps";

export interface IOrderState {
    count: number,
    activeOrders: OrderProps[];
    oldOrders: OrderProps[];

    loading: boolean;
    error: boolean;

    add: () => Promise<void>;
    get: () => Promise<void>;
    empty: () => void;
}