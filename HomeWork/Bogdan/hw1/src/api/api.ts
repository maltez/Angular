import axios from "axios";

const logger = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function () {
        const args = [];

        for (let _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }

        const funcArgs = args.map((a) => {
            return JSON.stringify(a);
        }).join();

        console.log(`Call: ${propertyKey} (${funcArgs})`);

        return original.apply(this, args);
    };

    return descriptor;
};

//tried to use everything that was on the lectures
class FakeApiCalls {
    private _promises: Array<Promise<string>> = [];

    constructor(private _numOfParallelRequests: number = 5, private _debug = false) {
    }

    set promises(promise: Promise<string>) {
        this._promises.push(promise)
    }

    @logger
    private makeApiCall(postID: number): Promise<string> {
        return axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(response => response.data)
            .catch(err => err.response.data)
    };

    @logger
    protected makeParallelRequests(num: number) {
        for (let i = 1; i <= num; i++) {
            this.promises = this.makeApiCall(i);
        }
    }

    @logger
    public doMagic() {
        this.makeParallelRequests(this._numOfParallelRequests);

        Promise
            .all(this._promises)
            .then(res => {
                if (this._debug) {
                    console.log('--- Result of parallel requests ---');
                    console.log(res);
                    console.log('--------------------------- \n\n');
                }

                return this.makeApiCall(this._numOfParallelRequests + 1);
            })
            .then(res => {
                if (this._debug) {
                    console.log('--- 1 from sequence ---');
                    console.log(res);
                    console.log('--------------------------- \n');
                }

                return this.makeApiCall(this._numOfParallelRequests + 2);
            })
            .then(res => {
                if (this._debug) {
                    console.log('--- 2d from sequence ---');
                    console.log(res);
                    console.log('--------------------------- \n');
                }

                return this.makeApiCall(this._numOfParallelRequests + 3);
            })
            .then(res => {
                if (this._debug) {
                    console.log('--- 3rd from sequence ---');
                    console.log(res);
                    console.log('--------------------------- \n');
                }
            });
    }
}

const f = new FakeApiCalls(10, true);
f.doMagic();