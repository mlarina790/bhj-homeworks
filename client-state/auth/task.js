'use strict';
const activeForm = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

function showForm() {
    if (localStorage.userId) {
        userId.innerText = localStorage.userId;
        welcome.classList.add('welcome_active');
    } else {
        activeForm.classList.add('signin_active');
    }
}

function submitForm(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = "json";
    xhr.addEventListener('readystatechange',
        function() {
            if (this.readyState == xhr.DONE && this.status == 200) {
                let resp = (xhr.response);
                if (resp.success === true) {
                    localStorage.userId = resp.user_id;
                    userId.innerText = resp.user_id;
                    activeForm.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    console.log(resp.user_id);

                } else {
                    alert('Неверный логин/пароль');
                }
            }
        });
    xhr.send(formData);
}

document.addEventListener('DOMContentLoaded', showForm);
document.addEventListener('submit', submitForm);