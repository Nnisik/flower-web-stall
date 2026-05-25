import { create } from "zustand";
import {IGalleryStore} from "../types/IGalleryStore";
import {IProductProps} from "../types/ProductProps";

export const useGalleryStore = create<IGalleryStore>((set) => {
    return {
        products: [],
        services: [],

        loading: false,
        error: false,

        get: async () => {
            set({
                loading: true
            });

            try {
                const res = await fetch(`https://${import.meta.env.VITE_API_TOKEN}.mockapi.io/api/v1/products`);

                if (!res.ok) {
                    set({
                        loading: false,
                        error: true
                    });
                    console.error(`Error ${res.status} - fetch failed - ${res.body}`);
                }

                const data: IProductProps[] = await res.json();

                const prods:IProductProps[] = [];
                const servs:IProductProps[] = [];

                data.forEach((card) => {
                    if (card.type == "product") {
                        prods.push(card)
                    } else {
                        servs.push(card)}
                });

                set({
                    products: prods,
                    services: servs,
                    loading: false,
                    error: false
                });
            }
            catch (err) {
                set({
                    loading: false,
                    error: true
                });
                console.error(err)
            }
        }
    }
});