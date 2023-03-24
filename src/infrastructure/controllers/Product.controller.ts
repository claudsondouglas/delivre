import CreateProduct from "@cases/product/CreateProduct.case";
import DeleteProduct from "@cases/product/DeleteProduct.case";
import FindProduct from "@cases/product/FindProduct.case";
import ListProduct from "@cases/product/ListProduct.case";
import UpdateProduct from "@cases/product/UpdateProduct.case";
import Product from "@entities/Product.entity";
import ProductRepository from "@repositories/Product.respository";
import { Request, Response } from "express";

class ProductController {
    async index(req: Request, res: Response) {
        const repository = new ProductRepository();
        const products = await new ListProduct(repository).execute();

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        return res.json(products);
    }

    async show(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        let product;
        try {
            const repository = new ProductRepository();
            product = await new FindProduct(repository).execute(id);
        } catch (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.json(product);
    }

    async store(req: Request, res: Response) {
        const product: Product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }

        if (!product.name || !product.description || !product.price) {
            return res.status(400).json({
                message: "Invalid product data.",
            });
        }

        const repository = new ProductRepository();
        try {
            const newProduct = await new CreateProduct(repository).execute(product);
            return res.json(newProduct);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const product: Product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }

        const repository = new ProductRepository();
        const updateProduct = new UpdateProduct(repository);

        try {
            const updatedProduct = await updateProduct.execute(id, product);

            return res.json(updatedProduct);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const repository = new ProductRepository();
        const deletedProduct = await new DeleteProduct(repository).execute(id);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.json(deletedProduct);
    }
}

export default ProductController;