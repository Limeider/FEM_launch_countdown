const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let totalTime = 1209600;  // 14 days in seconds

function updateTimer() {
    const daysValue = Math.floor(totalTime / (24 * 60 * 60));
    const hoursValue  = Math.floor((totalTime % (24 * 60 * 60)) / 3600)
    const minutesValue  = Math.floor(((totalTime % (24 * 60 * 60)) % 3600) / 60)
    const secondsValue  = Math.floor(totalTime % 60)

    days.textContent = String(daysValue).padStart(2, '0');
    hours.textContent = String(hoursValue).padStart(2, '0');
    minutes.textContent = String(minutesValue).padStart(2, '0');
    seconds.textContent = String(secondsValue).padStart(2, '0');

    totalTime--;
}

setInterval(updateTimer, 1000);