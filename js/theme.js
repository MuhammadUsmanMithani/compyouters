const theme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (!theme && prefersDarkScheme) {
    localStorage.setItem("theme", "dark");
    console.log("System default dark theme is enabled by default! Enabling dark mode...");
}
const themeSwitcher = document.getElementsByClassName("theme-switcher")[0];
if (theme === "dark") {
    document.body.classList.add("dark");
    themeSwitcher.checked = true;
}
themeSwitcher.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});