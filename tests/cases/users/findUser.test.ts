
import FindUser from "@cases/user/FindUserCase";
import UserRepository from "@repositories/UserRepository";

describe("FindUser Case", () => {
    const userRepository = new UserRepository;


    it("should find a user", async () => {
        const user = new FindUser(userRepository).execute(1);

        expect(user).resolves.toBeTruthy();
    });

    it("should not find a user", async () => {
        const user = new FindUser(userRepository).execute(216378);

        expect(user).resolves.toBeFalsy();
    });
});
