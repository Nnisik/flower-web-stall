interface ProductProp {
    id?: number,
    header: string,
    description?: string,
    type: "product" | "service",
    price?: number,
    image: string,
    available?: boolean
}

export default ProductProp;