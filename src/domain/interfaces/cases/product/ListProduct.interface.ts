import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product.entity";

export default interface ListProductInterface {
    productRepository: ProductRepositoryInterface;

    execute(): Promise<Product[]>
}
