const resumeData = {
  "name": "Eric Salamba",
  "job title": "Computer Scientist",
  "description": "Highly motivated and skilled Computer Scientist with a strong background in software development, data analysis, and machine learning. Proven ability to work effectively in both individual and team settings to deliver high-quality solutions. Seeking a challenging role where I can leverage my expertise and contribute to innovative projects.",
  "contact": {
    "phone": "+254 724 530 004",
    "email": "ericsalamba@gmail.com"
  },
  'social': {
    'github': "https://github.com/salamba-eric",
    'linkedin': "https://linkedin.com/in/ericsalamba"
  },
  'trade-mark': "© 2025 Eric Salamba. All rights reserved.",
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
  else console.warn(`Missing element with ID '${id}'`);
}

function setLink(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.href = url;
}

function renderBasicInfo(data) {
  setText('name', data['name']);
  setText('page-title', data['name'] + "'s Portfolio");
  setText('portfolio-title', data['name']);
  setText('job-title', data['job title']);
  setText('summary', data['description']);
  setText('phone', data['contact']?.['phone'] || '');
  setText('email', data['contact']?.['email'] || '');
  setLink('github', data['social']?.['github']);
  setLink('linkedin', data['social']?.['linkedin']);
  setText('trade-mark', data['trade-mark'] || '© 2025 Eric Salamba. All rights reserved.');
}

function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const grouped = {};
  projects.forEach(p => {
    console.log(p)
    const cat = p.category.replace(/_/g, ' ');
    grouped[cat] = grouped[cat] || [];
    grouped[cat].push(p);
  });

  container.innerHTML = Object.entries(grouped).map(([category, items]) => `
      <section class="mb-8" style="margin: 10px;">
      <h2 class="text-2xl font-bold mb-3">${category}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${items.map(p => `
          <a href="${p.url}" target="_blank" class="block border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white" style="margin: 10px;">
            <div class="w-full h-40 bg-gray-100 flex items-center justify-center" style="margin-bottom: 0;">
              <img 
                src="${p.image}" 
                alt="${p.name}" 
                class="w-full h-40 object-cover border-2 m-0" 
                style="border: none; margin: 10px; box-shadow: none; border-radius: 0.5rem;"
                onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=404'; this.style.background='#f3f4f6';"
              >
            </div>
            <div class="p-4">
              <h3 class="text-[#0d141c] text-base font-semibold leading-normal mb-1">${p.name}</h3>
              <p class="text-[#49739c] text-sm font-normal leading-normal mb-2">${p.description}</p>
              <div class="flex flex-wrap gap-2">
                ${p.tools.map(tool => `
                  <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">${tool}</span>
                `).join('')}
              </div>
            </div>
          </a>`).join('')}
      </div>
    </section>
  `).join('');
}


async function loadProjectsFromLocalJson() {
  try {
    const res = await fetch("./projects.json");
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const projects = await res.json();
    console.log("✅ Loaded projects from local file", projects);
    renderProjects(projects);
  } catch (err) {
    console.error("🔥 Failed to load projects.json:", err);
    const container = document.getElementById('projects-container');
    if (container) {
      container.innerHTML = `<p class="text-red-500">Unable to load portfolio projects.</p>`;
    }
  }
}
// Entry point
document.addEventListener('DOMContentLoaded', () => {
  renderBasicInfo(resumeData);
  loadProjectsFromLocalJson('salamba-eric');
});
