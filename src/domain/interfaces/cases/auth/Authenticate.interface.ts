export default interface AuthenticateInterface {
    execute(email: string, password: string): Promise<string>;
}