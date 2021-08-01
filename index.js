let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("btn");
var goto = document.getElementsByClassName("goto");
console.log(goto);
menuBtn.onclick = function () {
  if (sideNav.style.right == "-800px") {
    sideNav.style.right = "0";
    menu.src = "./Barber_Shop_img/Barber_Shop_img/close.png";
  } else {
    sideNav.style.right = "-800px";
    menu.src = "./Barber_Shop_img/Barber_Shop_img/menu.png";
  }
};
for (let x = 0; x < goto.length; x++) {
  goto[x].onclick = function () {
    if (window.innerWidth <= "750") {
      sideNav.style.right = "-800px";
      menu.src = "./Barber_Shop_img/Barber_Shop_img/menu.png";
    }
  };
}

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
