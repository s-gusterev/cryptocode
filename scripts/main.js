import "/css/style.css";
import "normalize.css";

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

const openMenu = (item, className) => {
  item.classList.toggle(className);
};

burger.addEventListener("click", () => {
  openMenu(mobileMenu, "mobile-menu_active");
});
