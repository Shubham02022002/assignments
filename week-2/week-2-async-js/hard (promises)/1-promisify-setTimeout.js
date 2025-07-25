/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`Promise resolved after ${n} seconds.`))
        }, n * 1000)
    })
    return promise;
}

module.exports = wait;
