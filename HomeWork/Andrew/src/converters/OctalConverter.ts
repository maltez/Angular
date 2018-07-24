import ConverterInterface from '../interfaces/ConverterInterface';

class OctalConverter implements ConverterInterface {

    convertFrom(input: string): number {
        return parseInt(input, 8);
    }

    convertTo(input: number): string {
        return input.toString(8);
    }
}