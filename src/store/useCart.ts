import { create } from "zustand";
import ProductProp from "../types/ProductProp.ts";

const initialState = {
    count: 0,
    items: []
};

interface ICartState {
    count: number;
    items: ProductProp[];

    add: (item: ProductProp) => void;
    // remove: (id: number) => void;
    empty: () => void;
}

const useCart= create<ICartState>((set) => {
    return ({
        count: 0,
        items: [],

        add: (item) => {
            set((state) => ({
                count: state.count + 1,
                items: [...state.items, {...item} ]
            }))
        },

        empty: () => {
            set(() => ({
                count: initialState.count,
                items: initialState.items
            }))
        }
    });
})

export default useCart;