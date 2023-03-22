interface Product {
    id?: number;
    name: string
    description: string;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default Product;