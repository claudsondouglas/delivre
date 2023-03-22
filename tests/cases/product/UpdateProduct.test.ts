import CreateProduct from "@cases/product/CreateProduct.case";
import UpdateProduct from "@cases/product/UpdateProduct.case";
import Product from "@entities/Product";
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

    it("Should update a product", async () => {
        if (!product.id) {
            throw new Error("Product not created");
        }

        expect(await new UpdateProduct(repository).execute(product.id, {
            name: "Product 1 edited",
            description: "Product 1 description",
            price: 10
        })).toEqual({
            id: expect.anything(),
            name: "Product 1 edited",
            description: "Product 1 description",
            price: 10,
            createdAt: expect.anything(),
            updatedAt: expect.anything(),
        });
    });
});