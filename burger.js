window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("SidenVises");

  document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");

  document.querySelector("#menu").classList.toggle("hidden");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#burgermenu").innerHTML = '<img src = "icons/CiHamburger.png" alt="burger">';
  } else {
    document.querySelector("#burgermenu").innerHTML = '<img src= "icons/MakiCross11.png" alt = "kryds">';
  }
}
