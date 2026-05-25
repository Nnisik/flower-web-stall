import ProductProp from "./ProductProps.d.ts";

export default interface IOrderProps {
    id: number | string,
    items?: number,
    content?: ProductProp[],
    orderDate: string,
    status: string,
    deliveredDate?: string,
    price: number
}