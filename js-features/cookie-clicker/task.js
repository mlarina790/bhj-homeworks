'use strict'
const timer = document.getElementById("cookie");
let clickTimer=0;

function clickerTimer() {
    let newTimer = ++ clickTimer;
    document.getElementById("clicker__counter").textContent = newTimer;
    if (timer.width <= 200) {
        timer.width = 250;
    } else {
        timer.width = 200;
    }
}
timer.onclick = clickerTimer;