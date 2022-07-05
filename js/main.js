import openDescr from "./open-descr.js";
import menuOpen from "./menu.js";
import selectForm from "./tabs.js";

const body = document.querySelector('body');
const burger = document.querySelector('.burger-btn');
const menu =  document.querySelector('.nav-items');
const items = document.querySelectorAll('.nav-item');

const karina = document.querySelector('.from-for-karina');
const dima = document.querySelector('.from-for-dima');
const tabKarina = document.querySelector('.tab-karina');
const tabDima = document.querySelector('.tab-dima');

selectForm(tabKarina, karina, dima);
selectForm(tabDima, dima, karina);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

menuOpen(burger, menu);
openDescr(body);

AOS.init();