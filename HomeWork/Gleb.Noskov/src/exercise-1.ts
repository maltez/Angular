interface ConvertorInterface {
    convertFrom(input:string):void;
    convertTo(input:number):void;
}

class BinaryConverter implements ConvertorInterface {
    convertFrom(decimal:string):string {
        return parseInt(decimal, 10).toString(2);
    }

    convertTo(binary:number):string {
        return binary.toString(2);
    }
}

class OctalConverter implements ConvertorInterface {
    convertFrom(val:string):number {
        return parseInt(val, 8);
    }

    convertTo(val:number):string {
        return val.toString(8);
    }
}

class HexConverter implements ConvertorInterface {
    convertFrom(val:string):number {
        return parseInt(val, 16);
    }

    convertTo(val:number):string {
        return val.toString(16);
    }
}

// const Binary = new BinaryConverter();
// console.log(Binary.convertTo(255));

// const Octal = new OctalConverter();
// console.log(Octal.convertFrom('012'));

const Octal = new HexConverter();
console.log(Octal.convertFrom('FF'));