import User from "@entities/User.entity";

export default interface FindUserBySlugInterface {
    execute(slug: string, withPassword: boolean): Promise<User|null>;
}