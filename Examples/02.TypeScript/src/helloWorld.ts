function myFunction(stringNumber?: string): number {
    if(typeof stringNumber === 'string') {
        return parseInt(stringNumber);
    } else {
        return 0
    }
    
}

function fn(stringNumber: string): never {
    throw new Error('Not implemented exception');
}

const res: number = myFunction('1234');

type numberString = string | number;
const res1: numberString = 12;


function toString(val: string):void;
function toString(val: number):void;
function toString(val: number, encoding:string):void;

function toString(val: string | number, encoding?: string):void{

}

toString()

const myFn = function(num:number, cb: Function):void{
    cb(num);
}

function mySuperFn<T extends string | boolean>(val: T):string {
    return val.toString();
}

mySuperFn<string>('str');
mySuperFn<boolean>(true);
