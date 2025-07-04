import { resumeData } from './resume_data.js';

/**
 * Utility function to safely set the text content of an HTML element by its ID.
 * @param {string} id - The ID of the HTML element.
 * @param {string} text - The text content to set.
 */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = text;
  } else {
    console.warn(`Element with ID '${id}' not found for setText.`);
  }
}

/**
 * Utility function to safely set the inner HTML content of an HTML element by its ID.
 * @param {string} id - The ID of the HTML element.
 * @param {string} html - The HTML content to set.
 */
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = html;
  } else {
    console.warn(`Element with ID '${id}' not found for setHTML.`);
  }
}

/**
 * Utility function to create an unordered list (<ul>) from an array of strings.
 * Each string will become a list item (<li>).
 * @param {string[]} items - An array of strings to be rendered as list items.
 * @returns {string} The HTML string representing the unordered list.
 */
function createList(group, items) {
  if (group === 'experience'){
    return `
    <ul class="list-none space-y-1">
      ${items
        .map(
          item => `
            <li class="flex items-start text-[#A0A0A0] text-base font-normal leading-normal">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mt-1 mr-2" width="16" height="16" fill="#9ccfd8" viewBox="0 0 256 256">
                <path d="M216.49,79.51a12,12,0,0,1,0,17l-96,96a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L112,167l87.51-87.52A12,12,0,0,1,216.49,79.51Z"/>
              </svg>
              <span>${item}</span>
            </li>`
        )
        .join('')}
    </ul>
  `;}

  else if (group === 'certifications') {
    return `
    <ul class="list-none space-y-1">
      ${items
        .map(
          item => `
            <li class="flex text-[#A0A0A0] text-base font-normal leading-normal gap-2">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
              </svg>
              ${item}
            </li>`
        )
        .join('')}
    </ul>
  `;}
}


/**
 * Main function to render resume data to the DOM.
 */
function renderResume() {
  const data = resumeData; // Use the imported resumeData object

  // --- Dynamic Title Update (Browser Tab Title) ---
  // The 'name' property from resumeData is used to set the document.title
  if (data.name) {
    document.title = `${data.name}'s Resume`; // Example: "Eric Salamba's Resume"
  } else {
    document.title = 'Resume - Name Not Found'; // Fallback if name is missing
  }

  // --- Populate Basic Info ---
  setText('name', data.name); // This targets the h1 with id="name" in the body
  setText('resume-holder', data.name);
  setText('trade-mark', data['trade-mark'] || '');
  setText('job-title', data['job title']);
  setText('email', data.contact ? data.contact.email : '');
  setText('phone', data.contact ? data.contact.phone : '');
  setText('location', data.location ? `${data.location.city}, ${data.location.country}` : '');
  setText('summary', data.description || '');

  // --- Populate Skills ---
  if (data.skills) {
    const skillCategories = Object.entries(data.skills);
    const skillsHtml = skillCategories.map(([label, list]) => {
      if (Array.isArray(list)) {
        // Determine icon based on category label, mapping to the original icons
        let iconSvg = '';
        switch (label) {
          case 'programming languages':
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path></svg>`;
            break;
          case 'databases':
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path></svg>`;
            break;
          case 'frameworks':
            iconSvg = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"/>
                        </svg>
                        `;
            break;
          case 'tools': // Using Git commit icon if tools include Git specifically, else generic cloud/gear.
            iconSvg = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z"/>
                        </svg>
                    `;
            break;
          default:
            iconSvg = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        `; // Default check icon
        }

        return `
          <div class="flex flex-col gap-3 rounded-lg border border-[#4f4653] bg-[#28232a] p-4 items-center">
          <div class="flex gap-2 items-center">
            <div class="text-white" data-icon="${label.replace(/\s/g, '')}" data-size="24px" data-weight="regular">
            ${iconSvg}
            </div>
            <p class="text-white text-base font-medium leading-normal">${label}</p>
          </div class="text-center">
            <h2 class="text-white text-base font-bold leading-tight">${list.join(', ')}</h2>
          </div>
        `;
      }
      return '';
    }).filter(Boolean).join(''); // Filter Boolean removes any empty strings from categories not rendered
    setHTML('skills', skillsHtml);
  }

  // --- Populate Work Experience ---
  if (data['work experience'] && Array.isArray(data['work experience'])) {
      const experienceHtml = data['work experience'].map((job, index) => `
      <div class="flex flex-col items-center gap-1 ${index === 0 ? 'pt-3' : ''} ${index === data['work experience'].length - 1 ? 'pb-3' : ''}">
          <div class="text-[#E0E0E0]" data-icon="Briefcase" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path></svg>
          </div>
          ${index < data['work experience'].length - 1 ? '<div class="w-[1.5px] bg-[#4f4653] h-2 grow"></div>' : ''}
      </div>
      <div class="flex flex-1 flex-col py-3">
          <p class="text-[#E0E0E0] text-base font-medium leading-normal">${job['job title']}</p>
          <p class="text-[#A0A0A0] text-base font-normal leading-normal">${job.company} | ${job['start date']} - ${job['end date']}</p>
          ${createList("experience", job.responsibilities || [])}
      </div>
      `).join('');
      setHTML('experience', experienceHtml); // Changed 'experience' to 'experience-container' for consistency
  }
  
  // --- Populate Education ---
  if (data.education && Array.isArray(data.education)) {
    const rows = data.education.map((item) => `
      <div class="flex items-start gap-4 w-full">
        <div class="flex flex-col items-center pt-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"/>
          </svg>
          <div class="h-4 w-[1.5px] bg-[#4f4653] mt-1"></div>
          <div class="h-4 w-[1.5px] bg-[#4f4653]"></div>
        </div>

        <div class="flex-1">
          <p class="text-white text-base font-medium leading-normal">${item.degree}</p>
          <p class="text-[#b1a6b5] text-base font-normal leading-normal">
            ${item.institution}${item['graduation date'] ? ` | ${item['graduation date']}` : ''}
          </p>
          ${item.honors ? `<p class="text-[#a0a0a0] text-sm mt-1">${item.honors.join(', ')}</p>` : ''}
        </div>
      </div>
    `);

    setHTML('education', rows.join(''));
  }




  // --- Populate Projects ---
  if (data.projects && Array.isArray(data.projects)) {
    const projectsHtml = data.projects.map(proj => `
      <div class="mb-3 p-4 rounded-lg shadow-sm bg-white">
        <h3 class="font-bold text-purple-700">${proj.name}</h3>
        <p>${proj.description}</p>
        <small class="text-gray-600"><em>Technologies:</em> ${proj.technologies ? proj.technologies.join(', ') : 'N/A'}</small>
      </div>
    `).join('');
    setHTML('projects', projectsHtml);
  }

  // --- Populate Certifications ---
  if (data.certifications && Array.isArray(data.certifications)) {
    const certificationsHtml = createList("certifications", data.certifications.map(cert =>
      `${cert.name} – ${cert['issuing organization']}${cert.date ? ` (${cert.date})` : ''}`
    ));
    setHTML('certifications', certificationsHtml);
  }

  // Handle social links dynamically if needed, e.g., for icons or direct links
  const linkedinLink = document.getElementById('linkedin-link');
  if (linkedinLink && data.social && data.social.linkedin) {
    linkedinLink.href = data.social.linkedin;
    linkedinLink.style.display = 'inline'; // Make visible if data exists
  } else if (linkedinLink) {
    linkedinLink.style.display = 'none'; // Hide if no data
  }

  const githubLink = document.getElementById('github-link');
  if (githubLink && data.social && data.social.github) {
    githubLink.href = data.social.github;
    githubLink.style.display = 'inline'; // Make visible if data exists
  } else if (githubLink) {
    githubLink.style.display = 'none'; // Hide if no data
  }
}


// Call the main function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', renderResume);
