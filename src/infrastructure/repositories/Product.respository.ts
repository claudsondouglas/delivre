import ProductRepositoryInterface from '@domain/repositories/ProductRepository.interface';
import Product from '@entities/Product.entity';
import { PrismaClient } from '@prisma/client';

class ProductRepository implements ProductRepositoryInterface {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async list(): Promise<Product[]> {
        const products = this.prisma.product.findMany();

        return products as any;
    }

    async listByUser(id: number): Promise<Product[]> {
        const products = this.prisma.product.findMany({
            where: {
                userId: id
            }
        });

        return products as any;
    }


    async find(id: number): Promise<Product | null> {
        const product = await this.prisma.product.findUnique({
            where: {
                id: id,
            },
        });

        return product as Product;
    }

    async create(product: Product): Promise<Product> {
        const newProduct = await this.prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                userId: product.userId
            },
        });

        return newProduct as Product;
    }

    async update(id: number, product: Product): Promise<Product> {
        const updatedProduct = await this.prisma.product.update({
            where: {
                id: id,
            },
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
            },
        });

        return updatedProduct as Product;
    }

    async delete(id: number): Promise<boolean> {
        const deletedProduct = await this.prisma.product.delete({
            where: {
                id: id,
            },
        });

        if (deletedProduct) {
            return true;
        }

        return false;
    }
}

export default ProductRepository;