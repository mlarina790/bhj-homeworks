'use strict';
document.getElementsByTagName('input').file.onchange = function(event) {
    let file = this.files[0];

    document.getElementById('send').onclick = function() {
        const xhr = new XMLHttpRequest
        xhr.upload.onprogress = function (event) {
            const progress = document.getElementById( 'progress' );
             progress.value = (event.loaded / event.total).toFixed(3);
        };

        xhr.onloadend = function() {
            if (xhr.status == 200) {
                alert(`Данные успешно отправлены.`);
            } else {
                alert(`Произошла ошибка во время отправки: ${xhr.status}`);
            }
        };

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.send(file);
    };
} 