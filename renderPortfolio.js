const GITHUB_USERNAME = "salamba-eric";
const API_BASE = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const projectsContainer = document.getElementById("projects-container");

function createSkeletonCard() {
  return `<div class="animate-pulse bg-gray-200 rounded p-4 w-full h-56"></div>`;
}

function createProjectCard({ name, description, tools, image, url }) {
  return `
    <div class="bg-white p-5 rounded-lg shadow-md 
                hover:shadow-lg hover:shadow-gray-300/50
                transition-all duration-300 transform hover:scale-[1.01] flex flex-col h-full border border-gray-200">
      
      <div class="relative mb-4 group rounded-md overflow-hidden flex-shrink-0 bg-gray-50 p-2 shadow-sm">
        <img
          src="${image}"
          alt="${name}"
          class="w-full h-44 object-cover rounded-sm transition duration-500 group-hover:scale-105"
          onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(name)}'"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 cursor-pointer"
             onclick="showImageModal('${image.replace(/'/g, "\\'")}', '${name.replace(/'/g, "\\'")}')">
          <div class="bg-white text-gray-700 p-3 rounded-full shadow-md 
                      hover:bg-gray-100 transition transform scale-0 group-hover:scale-100 duration-300">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' class='h-6 w-6'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 3h6v6M9 21H3v-6M21 21l-7-7M3 3l7 7'/>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="flex-grow flex flex-col">
        <h3 
          class="text-xl font-semibold text-gray-800 mb-1 cursor-pointer 
                 hover:text-blue-600 transition duration-150"
          onclick="window.open('${url}', '_blank', 'noopener,noreferrer')"
        >
          ${name}
        </h3>
        <p class="text-sm text-gray-600 mb-3 flex-grow">${description}</p>
        
        <div class="flex flex-wrap gap-2 mt-2">
          ${tools && tools.length ? tools.map(tool => `<span class="inline-flex items-center bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-xs">${tool}</span>`).join("") : ""}
        </div>
      </div>
    </div>
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
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-800">${category}</h2>
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
    // Show loading skeletons
    projectsContainer.innerHTML = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">' +
      Array(6).fill(createSkeletonCard()).join('') + '</div>';

    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    
    const repos = await res.json();

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

    if (projects.length === 0) {
      projectsContainer.innerHTML = '<p class="text-center text-gray-500 py-8">No projects found with project_info.json files.</p>';
    } else {
      renderSections(projects);
    }
  } catch (e) {
    console.error('Failed to load projects:', e);
    projectsContainer.innerHTML = `<p class="text-red-500 text-center py-8">Failed to load projects. ${e.message}</p>`;
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fetchPortfolioProjects);
} else {
  fetchPortfolioProjects();
}