import VerifyInterface from '@domain/interfaces/cases/auth/verify.interface';
import { JwtPayload, verify } from 'jsonwebtoken';

class Verify implements VerifyInterface {
    async execute(token: string) : Promise<string|JwtPayload> {
        try {
            const decoded = verify(token, 'shhhhh');
            return decoded;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

export default Verify;