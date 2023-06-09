import CreateProduct from "@cases/product/CreateProduct.case";
import FindProduct from "@cases/product/FindProduct.case";
import ListProduct from "@cases/product/ListProduct.case";
import Product from "@entities/Product.entity";
import ProductRepository from "@repositories/Product.respository";

describe("Create Product", () => {
    let product : Product;
    let repository = new ProductRepository();

    beforeAll(async () => {
        product = await new CreateProduct(repository).execute({
            name: "Product 1",
            description: "Product 1 description",
            price: 10
        });
    });

    afterAll(async () => {
        if(product.id) {
            await repository.delete(product.id);
        }
    });

    it("Should find a product", async () => {
        if (!product.id) {
            throw new Error("Product not created");
        }

        expect(new ListProduct(repository).execute()).resolves.toBeTruthy();
    });
});