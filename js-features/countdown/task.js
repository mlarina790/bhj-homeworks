

let time = 3;
const timerEl = document.getElementById("timer");
let inter = setInterval(updateTimer, 1000); 

function updateTimer() {
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerEl.innerHTML = `${seconds}`;
    time--;
    if (seconds <= 0) {
        clearInterval(inter);
        alert('Стоп таймер и пуск ракеты!');
    }  
}





















