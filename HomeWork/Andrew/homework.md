# Homework 1.
- Creates interface Converter
    - Interface has two methods convertFrom(input:string):number and convertTo(input: number):string
- Interface has to be implemented by three classes BinaryConverter, OctalConverter, HexConverter
    - BinaryConverter -> convert decimal value to binary and reverse.
    - OctalConverter -> convert decimal value to octal and reverse.
    - HexConverter -> convert decimal value to hex and reverse.
- Create five request to fake API in parallel(request can be setTimeout and async)
- After aggregate them data -> make three request in sequence.
- Use promise
- Create decorator for function. Decorator should be log each time of invoke this function.

# Homework 2.
- Create new app via angular-cli.
- Clean-up the app.
- Create two components
    - First number keyboard(0-9)
    - Second calculation panel(show results from keyboard)