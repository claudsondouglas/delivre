import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product.entity";

export default interface UpdateProductInterface {
    productRepository: ProductRepositoryInterface;
    execute(id: number, product: Product): Promise<Product|null>;
}