import CreateProductInterface from "@domain/interfaces/cases/product/CreateProduct.interface";
import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product.entity";

export default class CreateProduct implements CreateProductInterface {
    productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    async execute(product: Product): Promise<Product> {
        const newProduct = await this.productRepository.create(product);

        return newProduct;
    }
}