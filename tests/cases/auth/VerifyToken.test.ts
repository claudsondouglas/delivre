import Authenticate from "@cases/auth/Authenticate.case";
import Verify from "@cases/auth/VerifyToken.case";
import Jwt from "@infrastructure/cryptography/Jwt";
import Bcrypt from "@infrastructure/hashing/Bcrypt";
import UserRepository from "@repositories/User.repository";

describe("Verificar token", () => {
    let validToken : string;
    let invalidToken : string = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3OTQ0ODEzMywiaWF0IjoxNjc5NDQ4MTMzfQ.MRCiBNMFDCkmwsq0kTRgv_BZ-9paQjTtBwzOfIA0Ewg"
    const hasher = new Bcrypt;
    const tokenizer = new Jwt;

    beforeAll(async () => {
        const repository = new UserRepository();
        validToken = await new Authenticate(repository, hasher, tokenizer).execute('admin@email.com', '123456');
    });

    it("should be able to verify a valid token", async () => {
        expect(new Verify(tokenizer).execute(validToken)).resolves.toBeTruthy();
    });

    it("should not be able to verify an invalid token", async () => {
        expect(new Verify(tokenizer).execute(invalidToken)).rejects.toThrow();
    });
})