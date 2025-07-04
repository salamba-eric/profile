// portfolio.js
AOS.init({
  once: true,
  duration: 700,
});

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);

  const body = document.body;
  if (newTheme === "dark") {
    body.classList.remove("bg-gray-50", "text-black");
    body.classList.add("bg-gray-900", "text-white");
  } else {
    body.classList.remove("bg-gray-900", "text-white");
    body.classList.add("bg-gray-50", "text-black");
  }

  // Update text colors inside all .portfolio-card elements
  document.querySelectorAll(".portfolio-card").forEach(card => {
    if (newTheme === "dark") {
      card.classList.add("text-white");
      card.classList.remove("text-black");
    } else {
      card.classList.add("text-black");
      card.classList.remove("text-white");
    }
  });
}
