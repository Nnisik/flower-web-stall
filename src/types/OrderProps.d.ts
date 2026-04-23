export default interface OrderProps {
    id: number,
    orderDate: string,
    status?: string,
    deliveredDate?: string,
    price: number
}