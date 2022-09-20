'use strict';
const modal = document.getElementById('subscribe-modal');
const closeModal = document.getElementsByClassName('modal__close')[0];

function showModal() {
    let statusModal = getCookie('modalActive');
    if (statusModal === 'false' || typeof statusModal === 'undefined') {
        modal.classList.add('modal_active');
    }
}

function modalClose() {
    modal.classList.remove('modal_active');
    document.cookie = 'modalActive=True';
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

document.addEventListener('DOMContentLoaded', showModal);
closeModal.addEventListener('click', modalClose);