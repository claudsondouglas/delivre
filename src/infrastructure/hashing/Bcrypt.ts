import bcrypt from "bcrypt";

export default class Bcrypt implements PasswordHasherInterface {
    async hash(password: string): Promise<string> {
        password = bcrypt.hashSync(password, 10);
    
        return password;
    }

    async compare(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compareSync(password, hashedPassword)
    }
}