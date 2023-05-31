import Product from '@entities/Product.entity';

export default interface ProductRepositoryInterface {
    list(): Promise<Product[]>;
    listByUser(id: number): Promise<Array<Product>>
    find(id: number): Promise<Product|null>;
    create(product: Product): Promise<Product>;
    update(id: number, product: Product): Promise<Product>;
    delete(id: number): Promise<boolean>;
}