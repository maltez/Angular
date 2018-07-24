export default interface Converter {

    convertFrom(input: string): number;
    convertTo(input: number): string;
}