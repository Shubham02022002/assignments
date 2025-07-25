/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, t * 1000);
    });
    return p1;

}

function wait2(t) {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(resolve, t * 1000);

    });
    return p2;
}

function wait3(t) {
    const p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, t * 1000);
    });
    return p3;

}

async function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
    return Date.now() - startTime;
}

module.exports = calculateTime;
