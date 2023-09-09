// make a theme switcher and save the theme to local storage
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
    console.log("System default dark theme is enabled by default! Enabling dark mode...");
}
let themeSwitcher = document.getElementsByClassName("theme-switcher")[0];
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeSwitcher.checked = true;
}
themeSwitcher.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});