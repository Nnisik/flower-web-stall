import { create } from "zustand";
import ProductProp from "../types/ProductProp.ts";

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
                const res = await fetch(`https://${import.meta.env.VITE_API_TOKEN}.mockapi.io/api/v1/products`);

                if (!res.ok) {
                    throw new Error("Fetch failed");
                }
                const data: ProductProp[] = await res.json();

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
            } catch (err:any) {
                console.log(err.message)
            }
        }
    }
});