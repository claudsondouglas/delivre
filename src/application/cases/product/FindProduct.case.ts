import FindProductInterface from "@domain/interfaces/cases/product/FindProduct.interface";
import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product";

export default class FindProduct implements FindProductInterface {
    productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    async execute(id: number): Promise<Product|null> {
        const product = await this.productRepository.find(id);

        return product;
    }
}