import VerifyInterface from '@domain/interfaces/cases/auth/verify.interface';
import TokenizerInterface from '@domain/interfaces/Tokenizer.interface';

class Verify implements VerifyInterface {
    constructor(private tokenizer: TokenizerInterface) {}

    async execute(token: string) : Promise<string|object> {
        try {
            const decoded = await this.tokenizer.verify(token);

            return decoded;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

export default Verify;