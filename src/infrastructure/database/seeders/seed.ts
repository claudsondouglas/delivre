import CreateProduct from "@cases/product/CreateProduct.case";
import CreateUser from "@cases/user/CreateUser.case";
import Bcrypt from "@infrastructure/hashing/Bcrypt";
import ProductRepository from "@repositories/Product.respository";
import UserRepository from "@repositories/User.repository";

export default class Seed {
    public async run(): Promise<void> {
        await this.seed();
    }
    
    protected async seed(): Promise<void> {
        const hasher = new Bcrypt;
        const userRepository = new UserRepository();
        new CreateUser(userRepository, hasher).execute({
            name: "admin",
            email: "admin@email.com",
            password: "123456",
        });

        const productRepository = new ProductRepository();

        const pizzas = [
            // Pizza de Calabresa
            { 
              name: "Pizza de Calabresa P", 
              description: "Pizza de calabresa com muçarela e molho de tomate", 
              price: 25.00 
            },
            { 
              name: "Pizza de Calabresa M", 
              description: "Pizza de calabresa com muçarela e molho de tomate", 
              price: 35.00 
            },
            { 
              name: "Pizza de Calabresa G", 
              description: "Pizza de calabresa com muçarela e molho de tomate", 
              price: 45.00 
            },
            // Pizza de Mussarela
            { 
              name: "Pizza de Mussarela P", 
              description: "Pizza de mussarela com molho de tomate", 
              price: 20.00 
            },
            { 
              name: "Pizza de Mussarela M", 
              description: "Pizza de mussarela com molho de tomate", 
              price: 30.00 
            },
            { 
              name: "Pizza de Mussarela G", 
              description: "Pizza de mussarela com molho de tomate", 
              price: 40.00 
            },
            // Pizza de Frango
            { 
              name: "Pizza de Frango P", 
              description: "Pizza de frango com muçarela e molho de tomate", 
              price: 27.00 
            },
            { 
              name: "Pizza de Frango M", 
              description: "Pizza de frango com muçarela e molho de tomate", 
              price: 37.00 
            },
            { 
              name: "Pizza de Frango G", 
              description: "Pizza de frango com muçarela e molho de tomate", 
              price: 47.00 
            },
          ];

        pizzas.map((pizza: any) => {
            new CreateProduct(productRepository).execute(pizza);
        })
    }
}

new Seed().run();