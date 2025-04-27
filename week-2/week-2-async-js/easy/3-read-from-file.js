const fs = require('fs');


fs.readFile('./a.txt', 'utf-8', (err, data) => {
    if (!err) {
        console.log(data);
    }
})

for (let i = 0; i < 10000000000000; i++) {
    // console.log(i);
}