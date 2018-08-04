class HexConverter implements ConverterInterface {
    convertFrom(input: string): number {
        return parseInt(input, 16);
    }

    convertTo(input: number): string {
        return (input).toString(16);
    }
}