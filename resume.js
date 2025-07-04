// script.js
AOS.init({
  once: true,
  duration: 700,
});

function toggleDarkMode() {
  const html = document.documentElement;
  const theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", theme);
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-white");
  document.body.classList.toggle("bg-gray-50");
  document.body.classList.toggle("text-black");
}

function downloadFile(type) {
  alert(`Download as ${type.toUpperCase()} not implemented yet.`);
}
