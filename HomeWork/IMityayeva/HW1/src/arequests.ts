import axios from "axios";

let promises: Array<Promise<String>> = [];
const mokedCall = function(commentId: number): Promise<string> {
    return axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(response => response.data)
        .catch(err => err.response.data)
};

const genPromises = function(reqAmount: number): void {
    for (let i = 0; i < reqAmount; i++) {
        promises.push(mokedCall(i + 5))
    }
};

const requestsAmount: number = 5;

genPromises(requestsAmount);

Promise.all(promises)
    .then(res => {
        console.log('First');
        console.log(res);
        return mokedCall(requestsAmount + 4)
    })
    .then(res => {
        console.log('Second');
        console.log(res);
        return mokedCall(requestsAmount + 2)
    })
    .then(res => {
        console.log('Third');
        console.log(res);
        return mokedCall(requestsAmount + 6)
    });