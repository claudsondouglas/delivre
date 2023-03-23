export default interface TokenizerInterface {
    generate(data: object): Promise<string>;
    verify(token: string): Promise<object>;
}