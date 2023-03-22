import CreateProduct from "@cases/product/CreateProduct.case";
import DeleteProduct from "@cases/product/DeleteProduct.case";
import Product from "@entities/Product";
import ProductRepository from "@repositories/Product.respository";

describe("Delete Product", () => {
    let product : Product;
    let repository = new ProductRepository();

    beforeAll(async () => {
        product = await new CreateProduct(repository).execute({
            name: "Product 1",
            description: "Product 1 description",
            price: 10
        });
    });

    it("Should find a product", async () => {
        if (!product.id) {
            throw new Error("Product not created");
        }

        expect(new DeleteProduct(repository).execute(product.id)).resolves.toBeTruthy();
    });
});