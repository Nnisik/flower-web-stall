export default interface CardProps {
    id?: number,
    text: string,
    description?: string,
    type: "product" | "service",
    price?: number,
    image?: string,
    available?: boolean
}