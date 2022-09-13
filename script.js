// scroll kategorier

const triggerContainer = document.querySelector(".trigger-container");
const shop = document.querySelector(".shop");
const anna = document.querySelector(".anna");
const louise = document.querySelector(".louise");
const lukas = document.querySelector(".lukas");
const maria = document.querySelector(".maria");
const nicklas = document.querySelector(".nicklas");
const background = [null, "anna", "louise", "lukas", "maria", "nicklas"];
const Udforsk = [shop, anna, louise, lukas, maria, nicklas];

window.onscroll = function (evt) {
  Udforsk.forEach((kategori, i) => {
    if (overlap(triggerContainer, kategori)) {
      Udforsk.forEach((kategori) => kategori.classList.remove("valgt"));
      kategori.classList.add("valgt");
      document.body.classList.remove(...background);
      document.body.classList.add(background[i]);
    }
  });

  var navBar = document.getElementById("header-nav");
  var logoBar = document.getElementsByClassName("big-logo");
  if (window.scrollY > 350) {
    navBar.classList.add("header-active");
  } else {
    navBar.classList.remove("header-active");
  }
};

function overlap(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();
  return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

function changeImage(anything) {
  document.body.classList.remove(...background);
  document.body.classList.add(anything);
}
