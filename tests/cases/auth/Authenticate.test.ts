import Authenticate from "@cases/auth/Authenticate.case";
import UserRepository from "@repositories/UserRepository";

describe("Authenticate", () => {
    let repository: UserRepository;

    beforeAll(async () => {
        repository = new UserRepository();
    });

    it("should be able to authenticate", async () => {
        expect(new Authenticate(repository).execute("Cassie85@hotmail.com", "123456")).resolves.toBeTruthy();
    });

    it("should not be able to authenticate with wrong password", async () => {
        expect(new Authenticate(repository).execute("Cassie85@hotmail.com", "wrongpass")).rejects.toThrow();
    });
    
    it("should not be able to authenticate with wrong email", async () => {
        expect(new Authenticate(repository).execute("nonexistent@hotmail.com", "123456")).rejects.toThrow();
    });
});