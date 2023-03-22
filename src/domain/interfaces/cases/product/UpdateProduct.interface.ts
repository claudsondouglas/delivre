import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product";

export default interface UpdateProductInterface {
    productRepository: ProductRepositoryInterface;
    execute(id: number, product: Product): Promise<Product|null>;
}