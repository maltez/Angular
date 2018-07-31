interface Converter {
    convertFrom(input: string): number;
    convertTo(input: number): string;
}

class BinaryConverter implements Converter {
    constructor() {}

    convertFrom(input: string): number {
        return parseInt(input, 2)
    }

    convertTo(input: number): string {
        return input.toString(2)
    }
}

class OctalConverter implements Converter {
    constructor() {}

    convertFrom(input: string): number {
        return parseInt(input, 8)
    }

    convertTo(input: number): string {
        return input.toString(8)
    }
}

class HexConverter implements Converter {
    constructor() {}

    convertFrom(input: string): number {
        return parseInt(input, 16)
    }

    convertTo(input: number): string {
        return input.toString(16)
    }
}

const binConverter = new BinaryConverter();
const octConverter = new OctalConverter();
const hexConverter = new HexConverter();

console.log(binConverter.convertFrom('10101'));
console.log(binConverter.convertTo(10));
console.log(octConverter.convertFrom('275'));
console.log(octConverter.convertTo(25));
console.log(hexConverter.convertFrom('abc'));
console.log(hexConverter.convertTo(116));