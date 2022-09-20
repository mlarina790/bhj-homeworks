'use strict';
const textByEditor = document.getElementById('editor');

function inputTextArea() {
    localStorage.text = textByEditor.value;
}

function returnText() {
    textByEditor.value = localStorage.getItem('text');
}

textByEditor.addEventListener('input', inputTextArea);
document.addEventListener('DOMContentLoaded', returnText);