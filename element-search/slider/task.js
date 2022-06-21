'use strict'
let clickLeft = document.getElementsByClassName('slider__navigation').item(0).querySelector(".slider__arrow_next");
let clickRight = document.getElementsByClassName('slider__navigation').item(0).querySelector(".slider__arrow_prev");
let sliderImagesArray = Array.from(document.getElementsByClassName('slider__item'));

clickLeft.onclick = goToNext;
clickRight.onclick = goToPrev;

function goToNext() {
    let indexActiveSlide = sliderImagesArray.findIndex(searchActiveSlide);
    sliderImagesArray[indexActiveSlide].classList.remove('slider__item_active');
    let nextIndex = indexActiveSlide === sliderImagesArray.length - 1 ? 0 : indexActiveSlide + 1;
    sliderImagesArray[nextIndex].classList.add('slider__item_active');
}

function goToPrev() {
    let indexActiveSlide = sliderImagesArray.findIndex(searchActiveSlide);
    sliderImagesArray[indexActiveSlide].classList.remove('slider__item_active');
    let nextIndex = indexActiveSlide === 0 ? sliderImagesArray.length - 1 : indexActiveSlide - 1;
    sliderImagesArray[nextIndex].classList.add('slider__item_active');
}

function searchActiveSlide(i) {
    if (i.className === "slider__item slider__item_active") {
        return i;
    }
}