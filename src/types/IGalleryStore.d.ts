import ProductProp from "./ProductProps.d.ts";

export interface IGalleryStore {
    products: ProductProp[];
    services: ProductProp[];

    loading: boolean,
    error: boolean,

    get: () => Promise<void>;
}