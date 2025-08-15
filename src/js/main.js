import "../css/index.css";

const modeSwitches = document.querySelectorAll("[data-mode-toggle]");

//зміна іконки лише якщо є use
const updateIcon = (isDark) => {
  const iconUse = document.querySelector("[data-mode-toggle] use");
  if (iconUse) {
    iconUse.setAttribute(
      "href",
      isDark
        ? "./src/img/icons/icons.svg#icon-sun"
        : "./src/img/icons/icons.svg#icon-moon"
    );
  }
};

const savedMode = localStorage.getItem("theme");

//! додаємо клас 'dark' на <html> якщо в локалсторедж є "dark"
if (savedMode === "dark") {
  document.documentElement.classList.add("dark");
  updateIcon(true);
} else {
  updateIcon(false);
}

modeSwitches.forEach((btn) =>
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon(isDark);
  })
);
