import UpdateProductInterface from "@domain/interfaces/cases/product/UpdateProduct.interface";
import ProductRepositoryInterface from "@domain/repositories/ProductRepository.interface";
import Product from "@entities/Product.entity";

export default class UpdateProduct implements UpdateProductInterface {
    productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    public async execute(id: number, product: Product): Promise<Product | null> {
        const findedProduct = await this.productRepository.find(id);

        if (!findedProduct) {
            return null;
        }

        const updatedProduct = await this.productRepository.update(id, {
            name: product.name,
            description: product.description,
            price: product.price,
        });

        return updatedProduct;
    }
}