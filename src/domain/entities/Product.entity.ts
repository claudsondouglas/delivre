interface Product {
    id?: number;
    name: string
    description: string;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    user?: any;
    userId?: number;
}

export default Product;