export default function themeSwitch() {
  new Toggler();
}
class Toggler {
  constructor() {
    this.body = document.body;
    this.themeIcons = document.querySelectorAll(".bi");
    this.loadTheme();
    this.attachListeners();
  }
  attachListeners() {
    this.themeIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        this.toggleTheme();
      });
    });
  }
  toggleTheme() {
    this.body.classList.toggle("light-theme");
    const isLight = this.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    this.updateIcons(isLight);
  }
  loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const isLight = savedTheme === "light";

    if (isLight) {
      this.body.classList.add("light-theme");
    } else {
      this.body.classList.remove("light-theme");
    }

    this.updateIcons(isLight);
  }
  updateIcons(isLight) {
    this.themeIcons.forEach((icon) => {
      icon.classList.remove("bi-moon-fill", "bi-sun-fill");
      icon.classList.add(isLight ? "bi-moon-fill" : "bi-sun-fill");
    });
  }
}
