export default interface TokenInterface {
    generate(data: object): Promise<string>;
    verify(token: string): Promise<any>;
}