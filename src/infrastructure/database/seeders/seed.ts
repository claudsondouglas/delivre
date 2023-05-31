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
            slug: "pizzaria-bom-viver",
            email: "admin@email.com",
            password: "123456",
        });
        new CreateUser(userRepository, hasher).execute({
          name: "padaria nova",
          slug: "padaria-nova",
          email: "padarianova@gmail.com",
          password: "123456",
      });
      
        const productRepository = new ProductRepository();

        const produtos = [
            // Pizza de Calabresa
            { 
              name: "Pizza de Calabresa P", 
              description: "Pizza de calabresa com muçarela e molho de tomate", 
              price: 25.00,
              userId: 1
            },
            { 
              name: "Pizza de Calabresa M", 
              description: "Pizza de calabresa com muçarela e molho de tomate", 
              price: 35.00,
              userId: 1
            },
            { 
              name: "Pizza de Calabresa G", 
              description: "Pizza de calabresa com muçarela e molho de tomate", 
              price: 45.00,
              userId: 1
            },
            // Pizza de Mussarela
            { 
              name: "Pizza de Mussarela P", 
              description: "Pizza de mussarela com molho de tomate", 
              price: 20.00,
              userId: 1
            },
            { 
              name: "Pizza de Mussarela M", 
              description: "Pizza de mussarela com molho de tomate", 
              price: 30.00,
              userId: 1
            },
            { 
              name: "Pizza de Mussarela G", 
              description: "Pizza de mussarela com molho de tomate", 
              price: 40.00,
              userId: 1
            },
            // Pizza de Frango
            { 
              name: "Pizza de Frango P", 
              description: "Pizza de frango com muçarela e molho de tomate", 
              price: 27.00,
              userId: 1
            },
            { 
              name: "Pizza de Frango M", 
              description: "Pizza de frango com muçarela e molho de tomate", 
              price: 37.00,
              userId: 1
            },
            { 
              name: "Pizza de Frango G", 
              description: "Pizza de frango com muçarela e molho de tomate", 
              price: 47.00,
              userId: 1
            },
            { 
              name: "Pão Francês", 
              description: "Pão tradicional da padaria", 
              price: 1.50,
              userId: 2
            },
            { 
              name: "Bolo de Chocolate", 
              description: "Bolo de chocolate fofinho e saboroso", 
              price: 20.00,
              userId: 2
            },
            { 
              name: "Croissant", 
              description: "Croissant folhado e crocante", 
              price: 3.50,
              userId: 2
            },
            { 
              name: "Sonho de Creme", 
              description: "Sonho recheado com creme de baunilha", 
              price: 2.00,
              userId: 2
            },
            { 
              name: "Torta de Frango", 
              description: "Torta salgada de frango com catupiry", 
              price: 15.00,
              userId: 2
            },
            { 
              name: "Pão de Queijo", 
              description: "Delicioso pão de queijo mineiro", 
              price: 2.50,
              userId: 2
            },
            { 
              name: "Pão Integral", 
              description: "Pão integral com grãos e sementes", 
              price: 2.00,
              userId: 2
            },
            { 
              name: "Pastel de Carne", 
              description: "Pastel frito recheado com carne moída", 
              price: 3.00,
              userId: 2
            },
            { 
              name: "Coxinha de Frango", 
              description: "Coxinha de frango com massa sequinha", 
              price: 2.50,
              userId: 2
            },
            { 
              name: "Pão de Hambúrguer", 
              description: "Pão especial para hambúrgueres", 
              price: 1.80,
              userId: 2
            }
          ];

        produtos.map((pizza: any) => {
            new CreateProduct(productRepository).execute(pizza);
        })
    }
}

new Seed().run();