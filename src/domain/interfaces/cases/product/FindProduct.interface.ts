import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product";

export default interface FindProductInterface {
    productRepository: ProductRepositoryInterface;

    execute(id: number): Promise<Product|null>;
}