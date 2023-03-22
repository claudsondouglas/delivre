import { verify } from 'jsonwebtoken';

export default async function VerifyToken(token: string) {
    try {
        const decoded = verify(token, 'shhhhh');
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
}