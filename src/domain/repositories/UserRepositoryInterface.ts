export default interface UserRepository {
    find(id: number): Promise<User|null>;
}