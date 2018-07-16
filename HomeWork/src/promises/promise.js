/* - Create five request to fake API in parallel(request can be setTimeout and async)
- After aggregate them data -> make three request in sequence.
- Use promise */
var req1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res1');
});
var req2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res2');
});
var req3 = new Promise(function (resolve, rejec) {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res3');
});
var req4 = new Promise(function (resolve, reject) {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res4');
});
var req5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), 'res5');
});
Promise.all([req1, req2, req3, req4, req5])
    .then(function (res) {
    console.log(res);
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
    });
})
    .then(function (res) {
    console.log(res);
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
    });
})
    .then(function (res) {
    console.log(res);
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, (Math.floor(Math.random() * 1000) + 1), res);
    });
});
