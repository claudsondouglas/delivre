import CreateUser from "@cases/user/CreateUserCase";
import UserRepository from "@repositories/User.repository";

export default class Seed {
    public async run(): Promise<void> {
        await this.seed();
    }
    
    protected async seed(): Promise<void> {
        const userRepository = new UserRepository();
        new CreateUser(userRepository).execute({
            name: "admin",
            email: "admin@email.com",
            password: "123456",
        });
    }
}

new Seed().run();