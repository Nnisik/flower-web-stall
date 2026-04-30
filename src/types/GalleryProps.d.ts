import ProductProp from "./ProductProp.ts";

export default interface GalleryProps {
    id?: number,
    type: 'product' | 'service',
    products?: ProductProp[],
    services?: ProductProp[]
}