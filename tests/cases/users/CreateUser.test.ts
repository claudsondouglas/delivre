
import CreateUser from "@cases/user/CreateUser.case";
import UserRepository from "@repositories/User.repository";
import User from "@entities/User";
import Bcrypt from "@infrastructure/hashing/Bcrypt";

describe("Create User Case", () => {
    const userRepository = new UserRepository;
    const hasher = new Bcrypt;

    let createdUser : any;

    afterAll(async () => {
        await userRepository.delete(createdUser.id);
    });


    it("should find a user", async () => {
        const random = Math.random().toString(36).substring(7);

        const user : User = {
            name: "Teste",
            email: `teste_${random}@development.com`,
            password: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        createdUser = await (new CreateUser(userRepository, hasher).execute(user));

        expect(createdUser).toBeTruthy();
    });
});
