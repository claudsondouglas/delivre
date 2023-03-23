import AuthenticateInterface from "@domain/interfaces/cases/auth/Authenticate.interface";
import TokenInterface from "@domain/interfaces/Tokenizer.interface";
import UserRepository from "@domain/repositories/UserRepository.interface";

export default class Authenticate implements AuthenticateInterface {
    constructor(
        private userRepository: UserRepository, 
        private hasher: PasswordHasherInterface,
        private tokenizer: TokenInterface,
    ) {}

    async execute(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        if (!this.hasher.compare(password, user.password)) {
            throw new Error("Password does not match");
        }

        return this.tokenizer.generate({ 
            id: user.id,
            name: user.name,
            email: user.email,
         });
    }
}