'use strict'
let dead = 0;
let lost = 0;

for (let i = 1; i < 10; i++) {
    let targetHole = document.getElementById('hole' + i);
    targetHole.onclick = () => {
        if (targetHole.className.includes('hole hole_has-mole')) {
            dead += 1;
            document.getElementById('dead').textContent = dead;
            if (dead === 10) {
                alert('Вы победили!');
                return location.reload();
            }
        }
        else {
            lost += 1;
            document.getElementById('lost').textContent = lost;
            if (lost === 5) {
                alert('Вы проиграли.');
                return location.reload();
            }
        }
    }
}