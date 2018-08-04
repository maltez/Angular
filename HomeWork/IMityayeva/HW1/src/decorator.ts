function someDecorator() {
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Decorator invoked!");
    }
}

class SomeClass {
    @someDecorator()
    someFunc() {
        console.log('Function called')
    }
}

let classInstance = new SomeClass();
classInstance.someFunc();