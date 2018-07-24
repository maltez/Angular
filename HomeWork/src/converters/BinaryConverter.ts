import ConverterInterface from '../interfaces/ConverterInterface';

class BinaryConverter implements ConverterInterface {

    convertFrom(input: string): number {
        return parseInt(input, 2);
    }

    convertTo(input: number): string {
        return (input).toString(2);
    }
}