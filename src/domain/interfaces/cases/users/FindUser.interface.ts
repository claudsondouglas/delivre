import User from "@entities/User.entity";

export default interface FindUserInterface {
    execute(id: number, withPassword: boolean): Promise<User|null>;
}