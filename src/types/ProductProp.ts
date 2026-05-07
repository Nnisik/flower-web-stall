interface ProductProp {
    id?: number,
    header: string,
    description: string,
    type: "product" | "service" | string,
    price: number | -1,
    image: string,
    available?: boolean
}

export default ProductProp;

/*
<html>TS2345: Argument of type '{ header: string;
description: string; image: string; price: number; type: string; id: number; }' is not assignable to parameter of type 'ProductProp'.<br/>Types of property 'type' are incompatible.<br/>Type 'string' is not assignable to type '&quot;product&quot; | &quot;service&quot;'.
 */