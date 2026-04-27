import { create } from "zustand";
import ProductProp from "../../types/ProductProp.ts";

const InitialState = {items: [],
    totalItems: 0,
    fullPrice: 0,
};

interface ICartState {
    items: ProductProp[];
    totalItems: number;
    fullPrice: number;
    addItem: (elem:ProductProp) => void;
    removeItem: (id: number) => void;
    empty: () => void;
}

export const useCartStore = create<ICartState>((set) => {
    return {
        items: [],
        totalItems: 0,
        fullPrice: 0,

        addItem: (item:ProductProp) =>
            set((state: ICartState) => ({
                ...state,
                items: [...state.items, item],
            })),

        removeItem: (id: number) =>
            set((state) => ({
                items: state.items.filter((item) => item.id !== id),
            })),

        empty: () => set(InitialState),
    };
});
