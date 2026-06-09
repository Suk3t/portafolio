import MoonIcon from "../assets/moon.svg";
import SunIcon from "../assets/sun.svg";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon") as HTMLImageElement | null;

  if (!button || !icon) return;

  const savedTheme = localStorage.getItem("theme") ?? "light";

  document.documentElement.dataset.theme = savedTheme;

  icon.src = savedTheme === "dark" ? SunIcon.src : MoonIcon.src;

  button.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = currentTheme;

    localStorage.setItem("theme", currentTheme);

    icon.src = currentTheme === "dark" ? SunIcon.src : MoonIcon.src;
  });
});
