import ListProductInterface from "@domain/interfaces/cases/product/ListProduct.interface";
import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product.entity";

export default class ListUserProduct {
    productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    public async execute(id: any): Promise<Product[]> {
        return this.productRepository.listByUser(id);
    }
}
