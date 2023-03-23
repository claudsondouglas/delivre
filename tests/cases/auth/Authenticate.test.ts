import Authenticate from "@cases/auth/Authenticate.case";
import Jwt from "@infrastructure/cryptography/Jwt";
import Bcrypt from "@infrastructure/hashing/Bcrypt";
import UserRepository from "@repositories/User.repository";

describe("Authenticate", () => {
    let repository: UserRepository;
    const hasher = new Bcrypt;
    const tokenizer = new Jwt;


    beforeAll(async () => {
        repository = new UserRepository();
    });

    it("should be able to authenticate", async () => {
        expect(new Authenticate(repository, hasher, tokenizer).execute("admin@email.com", "123456")).resolves.toBeTruthy();
    });

    it("should not be able to authenticate with wrong password", async () => {
        expect(new Authenticate(repository, hasher, tokenizer).execute("Cassie85@hotmail.com", "wrongpass")).rejects.toThrow();
    });
    
    it("should not be able to authenticate with wrong email", async () => {
        expect(new Authenticate(repository, hasher, tokenizer).execute("nonexistent@hotmail.com", "123456")).rejects.toThrow();
    });
});