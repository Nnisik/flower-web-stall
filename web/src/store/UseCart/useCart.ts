import { create } from "zustand";
import {ICartStore} from "../../types/ICartStore";

const initialState = {
    count: 0,
    items: []
};

const useCart= create<ICartStore>((set) => {
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