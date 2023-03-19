import bcrypt from "bcrypt";

export default async function HashPassword(password: string): Promise<string> {
    password = bcrypt.hashSync(password, 10);

    return password;
}