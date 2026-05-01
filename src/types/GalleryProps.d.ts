import ProductProp from "./ProductProp.ts";

export default interface GalleryProps {
    id?: number,
    header: string,
    type: 'product' | 'service',
    products?: ProductProp[],
    services?: ProductProp[]
}