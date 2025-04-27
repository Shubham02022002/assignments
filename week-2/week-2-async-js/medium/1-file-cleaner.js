const fs = require('fs');


fs.readFile('./a.txt', 'utf-8', (err, data) => {
    if (!err) {
        let cleanedFile = data.replace(/[\s]{2,}/g, " ");
        fs.writeFile('./a.txt', cleanedFile, "utf-8", (err) => {
            if (!err) {
                console.log(`File cleaned!`);
            }
        })
    }
})