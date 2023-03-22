import Product from '@entities/Product';

export default interface ProductRepositoryInterface {
    list(): Promise<Product[]>;
    find(id: number): Promise<Product|null>;
    create(product: Product): Promise<Product>;
    update(id: number, product: Product): Promise<Product>;
    delete(id: number): Promise<boolean>;
}