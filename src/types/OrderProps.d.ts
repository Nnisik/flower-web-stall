export default interface OrderProps {
    id: number,
    orderDate: string,
    status: 'pending payment' | 'approved' | 'delivering' | 'delivered' | 'canceled',
    deliveredDate?: string,
    price: number
}