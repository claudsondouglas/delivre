import TokenInterface from "@domain/interfaces/Token.interface";
import jsonwebtoken from "jsonwebtoken";

class Jwt implements TokenInterface {
    async generate(data: object): Promise<string> {
        return jsonwebtoken.sign(data, 'shhhhh', {
            expiresIn: '1d'
        });
    }
    
    verify(token: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export default Jwt;