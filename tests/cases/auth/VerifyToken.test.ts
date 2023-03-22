import Authenticate from "@cases/auth/Authenticate.case";
import VerifyToken from "@cases/auth/VerifyToken.case";
import UserRepository from "@repositories/User.repository";

describe("Verificar token", () => {
    let validToken : string;
    let invalidToken : string = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3OTQ0ODEzMywiaWF0IjoxNjc5NDQ4MTMzfQ.MRCiBNMFDCkmwsq0kTRgv_BZ-9paQjTtBwzOfIA0Ewg"

    beforeAll(async () => {
        const repository = new UserRepository();
        validToken = await new Authenticate(repository).execute('admin@email.com', '123456');
    });

    it("should be able to verify a valid token", async () => {
        expect(VerifyToken(validToken)).resolves.toBeTruthy();
    });

    it("should not be able to verify an invalid token", async () => {
        expect(VerifyToken(invalidToken)).rejects.toThrow();
    });
})