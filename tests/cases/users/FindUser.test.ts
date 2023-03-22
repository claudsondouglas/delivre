
import FindUser from "@cases/user/FindUser.case";
import UserRepository from "@repositories/User.repository";

describe("FindUser Case", () => {
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


    it("should find a user", async () => {
        const findedUser = new FindUser(userRepository).execute(user.id);

        expect(findedUser).resolves.toBeTruthy();
    });

    it("should not find a user", async () => {
        const findedUser = new FindUser(userRepository).execute(216378);

        expect(findedUser).resolves.toBeFalsy();
    });
});
