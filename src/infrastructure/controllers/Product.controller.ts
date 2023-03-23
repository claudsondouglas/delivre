import CreateProduct from "@cases/product/CreateProduct.case";
import DeleteProduct from "@cases/product/DeleteProduct.case";
import FindProduct from "@cases/product/FindProduct.case";
import ListProduct from "@cases/product/ListProduct.case";
import UpdateProduct from "@cases/product/UpdateProduct.case";
import Product from "@entities/Product.entity";
import ProductRepository from "@repositories/Product.respository";
import { Request, Response } from "express";

class ProductController {
    constructor(private productRepository: ProductRepository) {}

    async index(req: Request, res: Response) {
        const products = await new ListProduct(this.productRepository).execute();

        return res.json(products);
    }

    async show(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const product = await new FindProduct(this.productRepository).execute(id);

        return res.json(product);
    }

    async store(req: Request, res: Response) {
        const product : Product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }

        const newProduct = await new CreateProduct(this.productRepository).execute(product);

        return res.json(newProduct);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const product : Product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }

        const updatedProduct = await new UpdateProduct(this.productRepository).execute(id, product);

        return res.json(updatedProduct);
    }

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const deletedProduct = await new DeleteProduct(this.productRepository).execute(id);

        return res.json(deletedProduct);
    }
}

export default ProductController;