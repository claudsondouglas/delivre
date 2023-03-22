import AuthenticateInterface from "@domain/interfaces/AuthenticateInterface";
import UserRepository from "@domain/repositories/UserRepository.interface";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
//import User from "@entities/User";

export default class Authenticate implements AuthenticateInterface {
    constructor(private userRepository: UserRepository) {}

    async execute(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        if (!bcrypt.compareSync(password, user.password)) {
            throw new Error("Password does not match");
        }

        return jsonwebtoken.sign({ 
            id: user.id,
            name: user.name,
            email: user.email,
         }, 'shhhhh', {
            expiresIn: '1d'
         });
    }
}