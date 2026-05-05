interface ProductProp {
    id?: number,
    header: string,
    description?: string,
    type: "product" | "service",
    price: number | -1,
    image: string,
    available?: boolean
}

export default ProductProp;