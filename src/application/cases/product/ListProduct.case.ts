import ListProductInterface from "@domain/interfaces/cases/product/ListProduct.interface";
import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product";

export default class ListProduct implements ListProductInterface {
    productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    public async execute(): Promise<Product[]> {
        return this.productRepository.list();
    }
}
