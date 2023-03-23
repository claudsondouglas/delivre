import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product.entity";

export default interface CreateProductInterface {
    productRepository: ProductRepositoryInterface;

    execute(product: Product): Promise<Product>
}