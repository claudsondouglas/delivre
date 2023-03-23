import TokenInterface from "@domain/interfaces/Tokenizer.interface";
import { sign, verify } from "jsonwebtoken";

class Jwt implements TokenInterface {
    async generate(data: object): Promise<string> {
        return sign(data, 'shhhhh', {
            expiresIn: '1d'
        });
    }
    
    async verify(token: string): Promise<any> {
        const decoded = verify(token, 'shhhhh');

        return decoded;
    }
}

export default Jwt;