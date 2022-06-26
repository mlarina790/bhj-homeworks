'use strict';

const menuTitle = document.querySelector('.dropdown__value');
const menuList = Array.from(document.querySelectorAll('.dropdown__link'));

function closeAndOpenMenu() {
    let listOfMenu = document.querySelector('.dropdown__list')
    listOfMenu.classList.contains('dropdown__list_active') ? listOfMenu.classList.remove('dropdown__list_active') : listOfMenu.classList.add('dropdown__list_active');
};

menuTitle.addEventListener('click', closeAndOpenMenu);

menuList.forEach(function (item) {
    item.onclick = function () {
        document.querySelector('.dropdown__value').textContent = item.textContent;
        return false;
    };
    item.addEventListener('click', closeAndOpenMenu);
}) 