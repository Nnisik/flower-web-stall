import { create } from "zustand";
import CardProps from "../types/CardProps";

interface IGalleryState {
    products: CardProps[];
    services: CardProps[];

    get: () => Promise<void>;
}

// FIXME: returned gallery objects doesn't have headers
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
                const data: CardProps[] = await res.json();

                const prods:CardProps[] = [];
                const sers:CardProps[] = [];

                data.forEach((card) => {
                    if (card.type == "product") {
                        prods.push(card)
                    } else {
                        sers.push(card)
                    }
                });
                set({
                    products: prods,
                    services: sers
                });
            } catch (err:any) {
                console.log(err.message)
            }
        }
    }
});