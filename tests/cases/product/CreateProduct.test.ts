import CreateProduct from "@cases/product/CreateProduct.case";
import Product from "@entities/Product.entity";
import ProductRepository from "@repositories/Product.respository";

describe("Create Product", () => {
    let product : Product;
    let repository = new ProductRepository();

    afterAll(async () => {
        if(product.id) {
            await repository.delete(product.id);
        }
    });

    it("Should create a product", async () => {
        product = await new CreateProduct(repository).execute({
            name: "Product 1",
            description: "Product 1 description",
            price: 10
        });
 
        expect(product).toHaveProperty("id");
    });
});