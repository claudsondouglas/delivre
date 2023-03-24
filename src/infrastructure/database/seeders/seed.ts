import CreateUser from "@cases/user/CreateUser.case";
import Bcrypt from "@infrastructure/hashing/Bcrypt";
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
    }
}

new Seed().run();