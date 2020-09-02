window.pcs = function (id) {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getColorPart();
    const g = getColorPart();
    const b = getColorPart();
    return `rgb(${r},${g},${b})`;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
  }

  const theElem = get(id);

  function changeTheBgColor() {
    setCss(theElem, 'backgroundColor', getRandomColor());
  }

  return {
    css: function (property, value) {
      if (arguments.length < 2) {
        return getCss(theElem, property);
      }
      setCss(theElem, property, value);
      return this;
    },
    flash: function (flashLength, flashSpeed = 1000) {
      let interval = setInterval(changeTheBgColor, flashSpeed);
      setTimeout(() => clearInterval(interval), flashLength);
      return this;
    },
    click: function (callback) {
      theElem.addEventListener('click', callback);
      return this;
    },
    hide: function () {
      setCss(theElem, 'display', 'none');
      return this;
    },
    show: function () {
      setCss(theElem, 'display', 'block');
      return this;
    }
  };
};