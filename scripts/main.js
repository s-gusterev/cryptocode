import "/css/style.css";
import "normalize.css";

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleMenu = (menu) => {
  menu.classList.toggle("mobile-menu_active");
  document.addEventListener("keydown", handleEscClose);
  if (!menu.classList.contains("mobile-menu_active")) {
    document.removeEventListener("keydown", handleEscClose);
  }
};

const handleEscClose = (event) => {
  if (event.key === "Escape") {
    const openMenu = document.querySelector(".mobile-menu_active");
    toggleMenu(openMenu);
  }
};

document.addEventListener("click", (e) => {
  const target = e.target;
  const isMenu = target === mobileMenu || mobileMenu.contains(target);
  const isBurger = target === burger;
  const menuIsActive = mobileMenu.classList.contains("mobile-menu_active");

  if (!isMenu && !isBurger && menuIsActive) {
    toggleMenu(mobileMenu);
  }
});

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu(mobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth === 850) {
    mobileMenu.classList.remove("mobile-menu_active");
  }
});
