const menu = document.querySelector(".menu-icon");
const showMenu = document.querySelector("nav");
const closeMenu = document.querySelector(".menu-close");

menu.addEventListener("click", () => {
  showMenu.classList.add("active");
  closeMenu.classList.add("show");
  menu.classList.remove('menu-icon');
});

closeMenu.addEventListener("click", () => {
  showMenu.classList.remove("active");
  closeMenu.classList.remove("show");
  menu.classList.add("menu-icon");
});

window.addEventListener("click", ()=> {
  showMenu.classList.remove("active");
  menu.classList.add("menu-icon");
  closeMenu.classList.remove("show");
});

menu.addEventListener("click", (event)=> {
  event.stopPropagation();
});

showMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
