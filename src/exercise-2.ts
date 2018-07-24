import axious from 'axios';

function logger() {
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Was called property key: ' + propertyKey);
    }
}

class FakeRequest {
    private url:string = `https://jsonplaceholder.typicode.com/comments/`;

    private promises: Array<Promise<String>> = [];

    constructor() {
        console.log('Fake requester ready to use');
    }

    @logger()
    private generatePromise(number: number): Promise<string> {
        return axious
            .get(this.url + number).then(({data}) => data)
            .catch(err => {
               console.log(err);
            });
    }

    private buildRequests(count: number) {
        for (let i = 1; i <= count + 1; i++) {
            this.promises.push(this.generatePromise(i));
        }
    }

    public run() {
        this.buildRequests(5);

        Promise.all(this.promises).then(() => {
            return this.generatePromise(this.random());
        }).then(() => {
            return this.generatePromise(this.random());
        }).then(() => {
            return this.generatePromise(this.random());
        }).then(() => {
            return this.generatePromise(this.random());
        });
    }

    private random(min: number = 1, max: number = 20) {
        return min + Math.floor(Math.random() * (max + 1 - min));
    }
}

const requester = new FakeRequest();
requester.run();