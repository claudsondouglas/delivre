import CreateProduct from "@cases/product/CreateProduct.case";
import DeleteProduct from "@cases/product/DeleteProduct.case";
import FindProduct from "@cases/product/FindProduct.case";
import ListProduct from "@cases/product/ListProduct.case";
import UpdateProduct from "@cases/product/UpdateProduct.case";
import Product from "@entities/Product.entity";
import ProductRepository from "@repositories/Product.respository";

class ProductController {
    async index(req: any, reply: any) {
        const repository = new ProductRepository();
        const products = await new ListProduct(repository).execute();

        if (products.length === 0) {
            return reply.code(404).send({ message: 'No products found' });
        }

        return reply.send(products);
    }

    async show(req: any, reply: any) {
        const id = parseInt(req.params.id);
        let product;
        try {
            const repository = new ProductRepository();
            product = await new FindProduct(repository).execute(id);
        } catch (err) {
            return reply.code(500).send({ message: 'An error occurred' });
        }

        if (!product) {
            return reply.code(404).send({ message: 'Product not found' });
        }

        return reply.send(product);
    }

    async store(req: any, reply: any) {
        const product: Product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }

        if (!product.name || !product.description || !product.price) {
            return reply.code(400).send({
                message: "Invalid product data.",
            });
        }

        const repository = new ProductRepository();
        try {
            const newProduct = await new CreateProduct(repository).execute(product);
            return reply.send(newProduct);
        } catch (error: any) {
            return reply.code(400).send({
                message: error.message,
            });
        }
    }

    async update(req: any, reply: any) {
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

            return reply.send(updatedProduct);
        } catch (err: any) {
            return reply.code(400).send({ error: err.message });
        }
    }

    async delete(req: any, reply: any) {
        const id = parseInt(req.params.id);

        if (Number.isNaN(id)) {
            return reply.code(400).send({ error: 'Invalid product ID' });
        }

        const repository = new ProductRepository();
        const deletedProduct = await new DeleteProduct(repository).execute(id);

        if (!deletedProduct) {
            return reply.code(404).send({ error: 'Product not found' });
        }

        return reply.send(deletedProduct);
    }
}

export default ProductController;