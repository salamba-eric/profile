const GITHUB_USERNAME = "salamba-eric";
const API_BASE = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const projectsContainer = document.getElementById("projects-container");

// Toggle dark/light theme
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.onclick = () => {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
};

function createSkeletonCard() {
  return `<div class="animate-pulse bg-gray-200 dark:bg-[#1a1a1a] rounded p-4 w-full h-56"></div>`;
}

function createProjectCard({ name, description, tools, image, url }) {
  return `
    <a href="${url}" target="_blank" class="block bg-gray-100 dark:bg-[#1c1c1c] p-4 rounded shadow-md hover:shadow-lg transition">
      <img src="${image}" alt="${name}" class="w-full h-40 object-cover rounded mb-3" onerror="this.src='https://via.placeholder.com/300x200?text=${name}'"/>
      <h3 class="text-xl font-semibold text-[#2d2d2d] dark:text-white">${name}</h3>
      <p class="text-sm text-gray-700 dark:text-[#b1a6b5] mb-2">${description}</p>
      <div class="text-xs text-blue-500">${tools.join(", ")}</div>
    </a>
  `;
}

function renderSections(projects) {
  const grouped = {};
  projects.forEach(project => {
    const category = project.category.replace(/_/g, ' ');
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(project);
  });

  projectsContainer.innerHTML = Object.entries(grouped)
    .map(([category, items]) => {
      return `
        <section>
          <h2 class="text-2xl font-bold mb-4">${category}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${items.map(p => createProjectCard(p)).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

async function fetchPortfolioProjects() {
  try {
    const res = await fetch(API_BASE);
    const repos = await res.json();

    projectsContainer.innerHTML = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">' +
      Array(6).fill(createSkeletonCard()).join('') + '</div>';

    const projects = [];
    for (const repo of repos) {
      try {
        const infoRes = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/project_info.json`);
        if (!infoRes.ok) throw new Error("No project_info.json");
        const info = await infoRes.json();
        projects.push({
          name: info.name || repo.name,
          description: info.description || repo.description || "No description provided.",
          tools: info.tools || [],
          category: info.category || "Uncategorized",
          image: info.image || "https://via.placeholder.com/300x200",
          url: repo.html_url
        });
      } catch (err) {
        console.warn(`Skipping ${repo.name}:`, err.message);
      }
    }

    renderSections(projects);
  } catch (e) {
    projectsContainer.innerHTML = `<p class="text-red-500">Failed to load projects. ${e.message}</p>`;
  }
}

fetchPortfolioProjects();
