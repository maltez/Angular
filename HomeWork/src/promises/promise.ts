/* - Create five request to fake API in parallel(request can be setTimeout and async)
- After aggregate them data -> make three request in sequence.
- Use promise */

let req1 = new Promise((resolve, reject) => {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res1');
});
let req2 = new Promise((resolve, reject) => {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res2');
});
let req3 = new Promise((resolve, rejec) => {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res3');
});
let req4 = new Promise((resolve, reject) => {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res4');
});
let req5 = new Promise((resolve, reject) => {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res5');
});

Promise.all([req1, req2, req3, req4, req5])
    .then((res) => {
        console.log(res);
        return new Promise((resolve, reject) => {
            setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
        });
    })
    .then((res) => {
        console.log(res);
        return new Promise((resolve, reject) => {
            setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
        });
    })
    .then((res) => {
        console.log(res);
        return new Promise((resolve, reject) => {
            setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
        });
    })