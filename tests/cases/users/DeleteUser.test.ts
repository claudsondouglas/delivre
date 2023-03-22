import DeleteUser from "@cases/user/DeleteUser.case";
import UserRepository from "@repositories/User.repository";
import { PrismaClient } from "@prisma/client";

describe("Delete User Case", () => {
    const userRepository = new UserRepository;

    let user: any;

    beforeAll(async () => {
        user = await userRepository.create({
            name: "Teste",
            email: "teste@gmail.com",
            password: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    });


    it("should delete a user", async () => {
        const createdUser = new DeleteUser(userRepository).execute(user.id);
        expect(createdUser).resolves.toBeTruthy();
    });


    it("should'nt delete a user", async () => {
        const createdUser = new DeleteUser(userRepository).execute(237632476853);
        expect(createdUser).resolves.toBeFalsy();
    });
});
