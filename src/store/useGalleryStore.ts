import { create } from "zustand";
import CardProps from "../types/CardProps";

interface IGalleryState {
    items: CardProps[];
}

export const useGalleryStore = create<IGalleryState>((set) => {
    // TODO: add logic
});