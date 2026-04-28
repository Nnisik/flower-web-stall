import { create } from "zustand";
import CardProps from "../types/CardProps";

interface IGalleryState {
    items: CardProps[];
}

export const useGalleryStore = create<IGalleryState>((set) => {
    return {
        items: [{
            text: "Dawn Bloom",
            price: 55
        },{
            text: "Solstice Stems",
            price: 30
        },{
            text: "Whisper GreenS",
            price: 120
        },{
            text: "Clarity PetalS",
            price: 55
        },{
            text: "River Stone",
            price: 30
        },{
            text: "Moonlit Meadow",
            price: 120
        },{
            text: "Ember Leaf",
            price: 55
        },{
            text: "Skyline Bloom",
            price: 75
        },{
            text: "Still Waters",
            price: 250
        }]
    };
});