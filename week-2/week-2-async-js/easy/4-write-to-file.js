const fs = require('fs');

fs.readFile("./a.txt", "utf-8", (err, data) => {
    if (!err) {
        fs.writeFile('./b.txt', data, "utf-8", (err) => {
            if (!err) {
                console.log(`File contents transfered.`);
            }
        })
    }
})