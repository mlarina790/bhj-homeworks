'use strict'

const tabNav = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));

function clickNav() {
    for (let i = 0; i < tabNav.length; i++) {
        if (tabNav[i].className === "tab tab_active") {
            tabNav[i].className = "tab";
            tabContent[i].className = "tab__content";
        }
    }
    this.className = "tab tab_active";
    tabContent[tabNav.indexOf(this)].className = "tab__content tab__content_active";

}

for (let i = 0; i < tabNav.length; i++) {
    tabNav[i].addEventListener('click', clickNav);
}