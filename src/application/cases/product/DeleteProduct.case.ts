import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";

export default class DeleteProduct {
    private productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    async execute(id: number): Promise<Boolean> {
        const deletedProduct = await this.productRepository.delete(id);

        return deletedProduct;
    }
}