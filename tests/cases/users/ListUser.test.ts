import ListUser from "@cases/user/ListUserCase";
import UserRepository from "@repositories/UserRepository";

describe("List users", () => {
    const userRepository = new UserRepository;
    
    let user: any;
    const random = Math.random().toString(36).substring(7);

    beforeAll(async () => {
        user = await userRepository.create({
            name: "Teste",
            email: `teste_${random}@gmail.com`,
            password: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    });

    afterAll(async () => {
        await userRepository.delete(user.id);
    });

    it("List all", async () => {
        const users = await new ListUser(userRepository).execute();

        expect(users).toBeTruthy();
    });
});
