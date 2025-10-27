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
    <div class="bg-gray-100 dark:bg-[#1c1c1c] p-4 rounded shadow-md hover:shadow-lg transition flex flex-col">
      <div class="relative mb-3 group rounded overflow-hidden">
        <img
          src="${image}"
          alt="${name}"
          class="w-full h-40 object-cover rounded"
          onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(name)}'"
          onmousedown="(function(e){ e.preventDefault(); e.stopPropagation(); showImageModal(${JSON.stringify(image)}, ${JSON.stringify(name)}); })(event)"
          onmouseup="hideImageModal()"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
          <button
            type="button"
            class="pointer-events-auto bg-white dark:bg-[#111] text-gray-700 dark:text-white p-2 rounded-full shadow-sm hover:bg-gray-200 focus:outline-none"
            aria-label="Expand image"
            onmousedown="(function(e){ e.preventDefault(); e.stopPropagation(); showImageModal(${JSON.stringify(image)}, ${JSON.stringify(name)}); })(event)"
            onmouseup="hideImageModal()"
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' class='h-5 w-5'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 3h6v6M9 21H3v-6M21 21l-7-7M3 3l7 7'/>
            </svg>
          </button>
        </div>
      </div>
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="block">
        <h3 class="text-xl font-semibold text-[#2d2d2d] dark:text-white mb-1">${name}</h3>
        <p class="text-sm text-gray-700 dark:text-[#b1a6b5] mb-2">${description}</p>
        <div class="text-xs text-blue-500">${tools && tools.length ? tools.join(", ") : ""}</div>
      </a>

      <script>
        (function(){
          if (window._imageModalInitialized) return;
          window._imageModalInitialized = true;

          window.showImageModal = function(src, alt){
            if (document.getElementById('image-modal')) return;
            const modal = document.createElement('div');
            modal.id = 'image-modal';
            Object.assign(modal.style, {
              position: 'fixed',
              inset: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.75)',
              zIndex: 9999,
              cursor: 'zoom-out'
            });
            modal.innerHTML = '<img src='+JSON.stringify(src)+' alt='+JSON.stringify(alt)+' style="max-width:90%; max-height:90%; box-shadow:0 10px 30px rgba(0,0,0,0.6); border-radius:8px;"/>';
            document.body.appendChild(modal);
            // remove on mouseup anywhere (ensures release hides modal)
            // also allow click to remove
            modal.addEventListener('mouseup', window.hideImageModal);
            modal.addEventListener('click', window.hideImageModal);
          };

          window.hideImageModal = function(){
            const m = document.getElementById('image-modal');
            if (!m) return;
            m.removeEventListener('mouseup', window.hideImageModal);
            m.removeEventListener('click', window.hideImageModal);
            m.parentNode && m.parentNode.removeChild(m);
          };

          // ensure mouseup anywhere hides modal (covers case where mouseup not on modal)
          window.addEventListener('mouseup', function(){ window.hideImageModal(); });
        })();
      </script>
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
