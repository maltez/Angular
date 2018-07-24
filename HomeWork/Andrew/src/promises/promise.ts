/* - Create five request to fake API in parallel(request can be setTimeout and async)
- After aggregate them data -> make three request in sequence.
- Use promise */

let requests = [], requestsQuantity = 5;


for (let i = 0; i < requestsQuantity; i++) {
    let req = new Promise<string>((resolve, reject) => {
        setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), `res${i}`);
    });
    requests.push(req);
}

Promise.all(requests)
    .then((res: Array<string>): Promise<string> => {
        console.log(`Request one: ${res}`);
        return new Promise<string>((resolve, reject) => {
            setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
        });
    })
    .then((res: string): Promise<string> => {
        console.log(`Request two: ${res}`);
        return new Promise<string>((resolve, reject) => {
            setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
        });
    })
    .then((res: string): Promise<string> => {
        console.log(`Request three: ${res}`);
        return new Promise<string>((resolve, reject) => {
            setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
        });
    }).then((res: string) => {
        console.log('Requests completed');
    });