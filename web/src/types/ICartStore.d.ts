import ProductProp from "./ProductProps.d.ts";

export interface ICartStore {
    count: number;
    items: ProductProp[];

    add: (item: ProductProp) => void;
    empty: () => void;
}