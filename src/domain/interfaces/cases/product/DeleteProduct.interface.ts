import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";

export default interface DeleteProductInterface {
    productRepository: ProductRepositoryInterface;

    execute(id: number): Promise<Boolean>;
}