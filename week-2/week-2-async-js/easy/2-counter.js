
let counter = 1;
function update() {
    console.log(counter++);
    setTimeout(() => {
        update();
    }, 1000);
}

update();