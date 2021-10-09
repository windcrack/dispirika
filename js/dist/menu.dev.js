"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function menuOpen(button, menu) {
  button.addEventListener('click', function () {
    menu.classList.toggle('hide-menu');
  });
}

var _default = menuOpen;
exports["default"] = _default;
//# sourceMappingURL=menu.dev.js.map
