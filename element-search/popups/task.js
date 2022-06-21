'use strict'
const modal_main = document.querySelector('#modal_main');
const modal__close = document.querySelectorAll('div.modal__close');
const show_success = document.querySelector('.show-success');
const modal_success = document.querySelector('#modal_success');
modal_main.className = 'modal modal_active';

modal__close[0].onclick = function () {
    modal_main.className = 'modal'
}
show_success.onclick = function () {
    modal_main.className = 'modal'
    modal_success.className = 'modal modal_active';
}
modal__close[1].onclick = function () {
    modal_success.className = 'modal';
    modal_main.className = 'modal';
} 