const menu = document.querySelector(".menu-icon");
const showMenu = document.querySelector("nav");
const closeMenu = document.querySelector(".menu-close");

const toggleMenu = (open) => {
  showMenu.classList.toggle("active", open);
  closeMenu.classList.toggle("show", open);
  menu.classList.toggle("menu-icon", !open);
};

menu.addEventListener("click", (e) => {
  toggleMenu(true);
  e.stopPropagation();
});

closeMenu.addEventListener("click", () => toggleMenu(false));

window.addEventListener("click", () => toggleMenu(false));

showMenu.addEventListener("click", (e) => e.stopPropagation());
