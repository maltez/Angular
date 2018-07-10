"use strict";
function myFunction(stringNumber) {
    if (typeof stringNumber === 'string') {
        return parseInt(stringNumber);
    }
    else {
        return 0;
    }
}
function fn(stringNumber) {
    throw new Error('Not implemented exception');
}
var res = myFunction('1234');
var res1 = 12;
function toString(val, encoding) {
}
toString();
var myFn = function (num, cb) {
    cb(num);
};
function mySuperFn(val) {
    return val.toString();
}
mySuperFn('str');
mySuperFn(true);
