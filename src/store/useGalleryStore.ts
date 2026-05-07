import { create } from "zustand";
import ProductProp from "../types/ProductProp.ts";

import data from '../assets/json/demoData/gallery.data.json';

interface IGalleryState {
    products: ProductProp[];
    services: ProductProp[];

    get: () => Promise<void>;
}

export const useGalleryStore = create<IGalleryState>((set) => {
    return {
        products: [],
        services: [],

        get: async () => {
            try {
                const prods:ProductProp[] = [];
                const servs:ProductProp[] = [];

                data.forEach((card) => {
                    if (card.type == "product") {
                        prods.push(card)
                    } else {
                        servs.push(card)
                    }
                });
                set({
                    products: prods,
                    services: servs
                });
            } catch (error) {
                console.log(error)
            }
        }
    }
});