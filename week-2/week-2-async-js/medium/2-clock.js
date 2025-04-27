let dateFormat = {
    hours: 11,
    minutes: 58,
    seconds: 0
};

setInterval(() => {
    console.clear();
    dateFormat.seconds++;

    if (dateFormat.seconds === 60) {
        dateFormat.seconds = 0;
        dateFormat.minutes++;
    }
    if (dateFormat.minutes === 60) {
        dateFormat.minutes = 0;
        dateFormat.hours++;
    }
    if (dateFormat.hours === 24) {
        dateFormat.hours = 0;
    }

    let paddedSeconds = `${dateFormat.seconds}`.padStart(2, "0");
    let paddedMinutes = `${dateFormat.minutes}`.padStart(2, "0");
    let paddedHours = dateFormat.hours % 12 || 12;
    let timeFormat = dateFormat.hours < 12 ? "AM" : "PM";

    console.log(`${paddedHours.toString().padStart(2, "0")}:${paddedMinutes}:${paddedSeconds} ${timeFormat}`);
}, 1000);
