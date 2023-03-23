import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product.entity";

export default interface FindProductInterface {
    productRepository: ProductRepositoryInterface;

    execute(id: number): Promise<Product|null>;
}