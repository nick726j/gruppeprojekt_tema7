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
const mediaQuery = window.matchMedia('(min-width: 1080px)')
// scroll menu
window.onscroll = function (evt) {
  Udforsk.forEach((kategori, i) => {
    if (overlap(triggerContainer, kategori)) {
      Udforsk.forEach((kategori) => kategori.classList.remove("valgt"));
      kategori.classList.add("valgt");
      document.body.classList.remove(...background);
      document.body.classList.add(background[i]);
    }
  });

  // header change
  var navBar = document.getElementById("header-nav");
  if (window.scrollY > 50) {
    navBar.classList.add("header-active");
  } else {
    navBar.classList.remove("header-active");
  }
  
  // logo resize on scroll
    if (mediaQuery.matches) {
      if (window.scrollY > 100) {
        document.getElementById("logo").style.width = "15vw";
        document.getElementById("logo").style.transition = "0.5s";
      } else {
        document.getElementById("logo").style.width = "25vw";
      }
    } else {
      if (window.scrollY > 100) {
        document.getElementById("logo").style.width = "30vw";
        document.getElementById("logo").style.transition = "0.5s";
      } else {
        document.getElementById("logo").style.width = "50vw";
      }
    }
};

// logo resize based on media
window.onload = function logoSize() {
  if (mediaQuery.matches) {
    document.getElementById("logo").style.width = "25vw";
  } else { 
    document.getElementById("logo").style.width = "50vw";
  }
}

// overlap scroll menu
function overlap(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();
  return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

// Hover
function changeImage(anything) {
  document.body.classList.remove(...background);
  document.body.classList.add(anything);
}
