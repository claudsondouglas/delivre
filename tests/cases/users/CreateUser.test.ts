
import CreateUser from "@cases/user/CreateUserCase";
import UserRepository from "@repositories/UserRepository";
import User from "@entities/User";

describe("Create User Case", () => {
    const userRepository = new UserRepository;

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

        createdUser = await (new CreateUser(userRepository).execute(user));

        expect(createdUser).toBeTruthy();
    });
});
