import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product";

export default class CreateProduct {
    private productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    async execute(product: Product): Promise<Product> {
        const newProduct = await this.productRepository.create(product);

        return newProduct;
    }
}