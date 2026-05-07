import ProductProp from "./ProductProp.ts";

export default interface OrderProps {
    id: number | string,
    items?: number,
    content?: ProductProp[],
    orderDate: string,
    status: string,
    deliveredDate?: string,
    price: number
}