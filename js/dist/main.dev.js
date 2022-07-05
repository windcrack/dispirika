"use strict";

var _openDescr = _interopRequireDefault(require("./open-descr.js"));

var _menu = _interopRequireDefault(require("./menu.js"));

var _tabs = _interopRequireDefault(require("./tabs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var body = document.querySelector('body');
var burger = document.querySelector('.burger-btn');
var menu = document.querySelector('.nav-items');
var items = document.querySelectorAll('.nav-item');
var karina = document.querySelector('.from-for-karina');
var dima = document.querySelector('.from-for-dima');
var tabKarina = document.querySelector('.tab-karina');
var tabDima = document.querySelector('.tab-dima');
(0, _tabs["default"])(tabKarina, karina, dima);
(0, _tabs["default"])(tabDima, dima, karina);
var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
(0, _menu["default"])(burger, menu);
(0, _openDescr["default"])(body);
AOS.init();
//# sourceMappingURL=main.dev.js.map
