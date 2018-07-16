
/*- Create decorator for function. Decorator should be log each time of invoke this function.*/
let decoratorTest = () => {
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("decoratorTest: invoked");
    }
}

class TestDecorator {

    @decoratorTest()
    invokeFunction() {
         console.log('Function here!');
    }
}

let classDec = new TestDecorator();
classDec.invokeFunction();