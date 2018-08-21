const Module = (function() {
    class MyInternalClass {
        constructor() {
            this.internalId = 42;
        }
    }

    class MyExternalClass {
        constructor () {
            const internalInstance = new MyInternalClass();
            this.meaningOfLife = internalInstance.internalId;
        }
    }

    return {
        MyExternalClass
    }
})();

// const module = Module();
const externalInstance = new Module.MyExternalClass();