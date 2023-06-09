
import UpdateUser from "@cases/user/UpdateUser.case";
import UserRepository from "@repositories/User.repository";
import User from "@entities/User.entity";
import Bcrypt from "@infrastructure/hashing/Bcrypt";

describe("Update User Case", () => {
    const userRepository = new UserRepository;
    const hasher = new Bcrypt;

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
        user.name = "Teste editado";
        
        const updatedUser = await (new UpdateUser(userRepository, hasher).execute(user.id, user as User));
        

        expect(updatedUser).toEqual({
            id: user.id,
            name: "Teste editado",
            email: `teste_${random}@gmail.com`,
            password: expect.anything(),
            createdAt: expect.anything(),
            updatedAt: expect.anything(),
        });
    });
});
