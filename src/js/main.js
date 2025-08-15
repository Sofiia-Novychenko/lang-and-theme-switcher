import "../css/index.css";

const modeSwitches = document.querySelectorAll("[data-mode-toggle]");
const themeSwitcher = document.querySelector("[data-theme-switcher]");
const body = document.body;
const themes = ["theme-blue", "theme-red", ""]; //! "" означає дефолтну тему

// -------- Режим (світлий/темний) -------- //
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

const savedMode = localStorage.getItem("mode");
const savedTheme = localStorage.getItem("theme");

//! додаємо клас 'dark' на <html> якщо в локалсторедж є "dark"
//початковий РЕЖИМ
if (savedMode === "dark") {
  document.documentElement.classList.add("dark");
  updateIcon(true);
} else {
  updateIcon(false);
}
//початкова ТЕМА
if (savedTheme && themes.includes(savedTheme)) {
  body.classList.add(savedTheme);
}

modeSwitches.forEach((btn) =>
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    updateIcon(isDark);
  })
);

// -------- Перемикання теми -------- //
themeSwitcher.addEventListener("click", () => {
  const currentTheme = themes.find((t) => body.classList.contains(t));
  let nextTheme;

  if (!currentTheme) {
    nextTheme = themes[0];
  } else {
    //! просто циклічне перебирання тем по кліку
    const currentIndex = themes.indexOf(currentTheme);
    nextTheme = themes[(currentIndex + 1) % themes.length];
    body.classList.remove(currentTheme);
  }

  body.classList.remove(...themes.filter(Boolean));
  if (nextTheme) {
    body.classList.add(nextTheme);
  }
  localStorage.setItem("theme", nextTheme);
});
