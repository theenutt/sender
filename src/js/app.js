import * as flsFunctions from "./modules/functions.js";
import * as slicker from "./slick.min.js";


flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

$(document).ready(function(){
    $('.slider__body').slick();
});