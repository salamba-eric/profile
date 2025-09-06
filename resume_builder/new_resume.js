let projects = 0;
let experiences = 0;
let educations = 0;
let certifications = 0;
let skills = 0;
let imageNumber = 2; // Should always align with the number of files in image dir
let templateFocus = 1;

let userData = {
  "template": 0,
  "contact":{},
  "social":{},
  "location":{},
  "hobbies & interests": [],
  "projects":[], "work experience": [], "education": [], "certifications": [], "skills": {}
};


function createProject(){
    projects++;
    return `
    <div id="project-${projects}" class="border-2 border-[#0c77f2] rounded-lg w-full mb-4 collapsing-item">
        <div class="flex flex-row justify-between px-7">
        <label></label>
        <!-- From Uiverse.io by andrew-demchenk0 --> 
        <button type="button" class="button button--delete mt-3 ml-[20px]" data-project-id="${projects}">
            <span class="button__text">Delete</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg"><title></title><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path><line y2="112" y1="112" x2="432" x1="80" style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path><line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line></svg></span>
        </button>

        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
        <label class="flex flex-row items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Title:</p>
            <input
            id="project-name-${projects}"
            placeholder="Enter project title"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            />
        </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
        <label class="flex flex-col items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Description:</p>
            <textarea
                id="project-description-${projects}"
                placeholder="How would you describe your project?"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            ></textarea>
        </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
        <label class="flex flex-col items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Tools:</p>
            <textarea
                id="project-technologies-${projects}"
                placeholder="A list of tools used for the project {Comma separated}"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            ></textarea>
        </label>
        </div>
    </div>
    `
}

function createExperience(){
    experiences++;
    return `
    <div id="experience-${experiences}" class="border-2 border-[#0c77f2] rounded-lg w-full mb-4 collapsing-item">
        <div class="flex flex-row justify-between px-7">
          <label></label>
          <!-- From Uiverse.io by andrew-demchenk0 --> 
          <button type="button" class="button button--delete mt-3 ml-[20px]" data-experience-id="${experiences}">
              <span class="button__text">Delete</span>
              <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg"><title></title><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path><line y2="112" y1="112" x2="432" x1="80" style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path><line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line></svg></span>
          </button>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5 w-full">
          <label class="flex flex-row items-center items-center gap-3 w-full">
            <div class="w-1/2">
              <p class="text-white text-base font-medium leading-normal">Company:</p>
              <input
                id="experience-company-${experiences}"
                placeholder="Where did you work?"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
              />
            </div>
            <div class="w-1/2">
              <p class="text-white text-base font-medium leading-normal">Title:</p>
              <input
                id="experience-title-${experiences}"
                placeholder="What was your title there?"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
              />
            </div>
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Company Location:</p>
              <input
                id="experience-country-${experiences}"
                placeholder="Country"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
              />
              <input
                id="experience-city-${experiences}"
                placeholder="City/State/Region"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
              />
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center gap-2 w-full">
              <div class="flex flex-col items-center w-1/2">
                <p class="text-white text-base font-medium leading-normal"> Start Date </p>
                <input
                  id="experience-start-${experiences}"
                  type="date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
                />
              </div>
              <div class="flex flex-col items-center w-1/2">
                <p class="text-white text-base font-medium leading-normal"> Completion Date</p>
                <input
                  id="experience-end-${experiences}"
                  type="date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
                />
              </div>
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-col items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Responsibilities:</p>
            <textarea
                id="experience-roles-${experiences}"
                placeholder="What roles/accomplishments did you have during the period? (One per line)"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            ></textarea>
          </label>
        </div>
    </div>
    `
}

function createEducation(){
    educations++;
    return `
    <div id="education-${educations}" class="border-2 border-[#0c77f2] rounded-lg w-full mb-4 collapsing-item">
        <div class="flex flex-row justify-between px-7">
        <label></label>
        <!-- From Uiverse.io by andrew-demchenk0 --> 
        <button type="button" class="button button--delete mt-3 ml-[20px]" data-education-id="${educations}">
          <span class="button__text">Delete</span>
          <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg"><title></title><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path><line y2="112" y1="112" x2="432" x1="80" style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path><line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line></svg></span>
        </button>

        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Institution:</p>
            <input
            id="education-institution-${educations}"
            placeholder="Where did you acqire this degree?"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Degree:</p>
            <input
            id="education-degree-${educations}"
            placeholder="Enter your degree"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center gap-2 w-full">
            <p class="text-white text-base font-medium justify-center leading-normal">Dates: </p>
              <div class="flex flex-col items-center w-1/2">
                <p class="text-white text-base font-medium leading-normal"> Start </p>
                <input
                  id="education-start-${educations}"
                  type="date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
                />
              </div>
              <div class="flex flex-col items-center w-1/2">
                <p class="text-white text-base font-medium leading-normal"> Completion</p>
                <input
                  id="education-end-${educations}"
                  type="date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
                />
              </div>
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-col items-center items-center gap-2 w-full">
              <p class="text-white text-base font-medium leading-normal">Accomplishments:</p>
              <textarea
              id="education-accomplishments-${educations}"
              placeholder="Any accolades of note during your education? (One per line)"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
              ></textarea>
          </label>
        </div>
    </div>
    `
}

function createCertification(){
    certifications++;
    return `
    <div id="certification-${certifications}" class="border-2 border-[#0c77f2] rounded-lg w-full mb-4 collapsing-item">
        <div class="flex flex-row justify-between px-7">
        <label></label>
        <!-- From Uiverse.io by andrew-demchenk0 --> 
        <button type="button" class="button button--delete mt-3 ml-[20px]" data-certification-id="${certifications}">
          <span class="button__text">Delete</span>
          <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg"><title></title><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path><line y2="112" y1="112" x2="432" x1="80" style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path><line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line></svg></span>
        </button>

        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Certification</p>
            <input
              id="certificate-name-${certifications}"
              placeholder="Enter your certificate"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Institution</p>
            <input
              id="certificate-institution-${certifications}"
              placeholder="Where did you acquire this certification?"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center gap-2 w-full">
            <p class="text-white text-base font-medium justify-center leading-normal">Dates: </p>
              <div class="flex flex-col items-center w-1/2">
                <p class="text-white text-base font-medium leading-normal"> Start </p>
                <input
                  id="certificate-start-${certifications}"
                  type="date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
                />
              </div>
              <div class="flex flex-col items-center w-1/2">
                <p class="text-white text-base font-medium leading-normal"> Completion</p>
                <input
                  id="certificate-end-${certifications}"
                  type="date"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
                />
              </div>
          </label>
        </div>
    </div>
    `
}

function createSkills(){
    skills++;
    return `
    <div id="skill-${skills}" class="border-2 border-[#0c77f2] rounded-lg w-full mb-4 collapsing-item">
        <div class="flex flex-row justify-between px-7">
        <label></label>
        <!-- From Uiverse.io by andrew-demchenk0 --> 
        <button type="button" class="button button--delete mt-3 ml-[20px]" data-skill-id="${skills}">
            <span class="button__text">Delete</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg"><title></title><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path><line y2="112" y1="112" x2="432" x1="80" style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line><path style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path><line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line></svg></span>
        </button>

        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
          <label class="flex flex-row items-center items-center gap-2 w-full">
            <p class="text-white text-base font-medium leading-normal">Skill Name/Category:</p>
            <input
            id="skill-name-${skills}"
            placeholder="Skill Name/Category"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div class="flex flex-col items-center justify-center py-2 px-5">
            <label class="flex flex-col items-center items-center gap-2 w-full">
                <p class="text-white text-base font-medium leading-normal">Examples:</p>
                <textarea
                    id="skill-examples-${skills}"
                    placeholder="The things you can do with this skill? (One per line)"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-8 placeholder:text-[#90abcb] p-4 text-base font-normal leading-normal"
                ></textarea>
            </label>
        </div>
    </div>
    `
}

function renderTemplates(){
    return `
    <div class="w-full flex flex-wrap gap-6 p-4 justify-center items-center">
      <div class="flex flex-col gap-3 flex-1">
        <div
          class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
          ${templateFocus > 1 ? `style='background-image: url("images/image_${templateFocus - 1}.png");'` : ''}
        ></div>
      </div>

      <div class="flex flex-col gap-3 flex-1">
        <div
          class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
          style='background-image: url("images/image_${templateFocus}.png"); transform: scale(1.1);'
        ></div>
      </div>
      <div class="flex flex-col gap-3 flex-1">
        <div
          class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
 ${templateFocus + 1 <= imageNumber? `style='background-image: url("images/image_${templateFocus + 1}.png");'` : ''}
        ></div>
      </div>
    </div>
    `
}

function removeArrayItemOnce(arr, value) {
  var index = arr.indexOf(parseInt(value));
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function collectData (indices){

  userData["template"] = templateFocus;
  userData["name"] = document.getElementById("name").value;
  userData["image"] = document.getElementById("image").value;
  userData["job title"] = document.getElementById("job_title").value;
  userData["contact"]["email"] = document.getElementById("email").value;
  userData["contact"]["phone"] = document.getElementById("phone").value;
  userData["social"]["linkedIn"] = document.getElementById("linkedIn").value;
  userData["social"]["github"] = document.getElementById("github").value;
  userData["location"]["country"] = document.getElementById("country").value
  userData["location"]["city"] = document.getElementById("city").value
  userData["description"] = document.getElementById("summary").value;
  userData["hobbies & interests"] = document.getElementById("hobbies").value.split(',');

  indices["projects"].forEach(p => {
    userData["projects"].push({
        "name": document.getElementById(`project-name-${p}`).value,
        "description": document.getElementById(`project-description-${p}`).value,
        "technologies": document.getElementById(`project-technologies-${p}`).value.split(',')
    })
  })

  indices["work experience"].forEach(x => {
      userData["work experience"].push({
          "job title": document.getElementById(`experience-title-${x}`).value,
          "company": document.getElementById(`experience-company-${x}`).value,
          "location": `${document.getElementById(`experience-city-${x}`).value}, ${document.getElementById(`experience-country-${x}`).value}`,
          "start date": document.getElementById(`experience-start-${x}`).value,
          "end date": document.getElementById(`experience-end-${x}`).value,
          "responsibilities": document.getElementById(`experience-roles-${x}`).value.split('\n')
      })
  })

  indices["education"].forEach(e => {
    userData["education"].push({
        "institution": document.getElementById(`education-institution-${e}`).value,
        "degree": document.getElementById(`education-degree-${e}`).value,
        "graduation date": `${document.getElementById(`education-start-${e}`).value} - ${document.getElementById(`education-end-${e}`).value}`,
        "honors": document.getElementById(`education-accomplishments-${e}`).value.split('\n')
    })
  })

  indices["certifications"].forEach(c => {
    userData["certifications"].push({
      "name": document.getElementById(`certificate-name-${c}`).value,
      "institution": document.getElementById(`certificate-institution-${c}`).value,
      "date": `${document.getElementById(`certificate-start-${c}`).value} - ${document.getElementById(`certificate-end-${c}`).value}`,
    })
  })

  indices["skills"].forEach(s => {
    userData["skills"][document.getElementById(`skill-name-${s}`).value] = document.getElementById(`skill-examples-${s}`).value.split('\n')
  })
}

function fillDataFromStorage(skillIndices){
  const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");

  // Simple direct mapping: input ID -> userData property
  const mapping = {
    name: "name",
    email: "contact.email",
    phone: "contact.phone",
    profile: "image",
    linkedIn: "social.linkedIn",
    github: "social.github",
    country: "location.country",
    city: "location.city",
    job_title: "job title",
    hobbies: "hobbies & interests",
    summary: "description"
  };

  for (const [id, path] of Object.entries(mapping)) {
    const el = document.getElementById(id);
    if (el) {
      let value = getValueByPath(userData, path);
      if (Array.isArray(value)) value = value.join(", ");
      if (value) el.value = value;
    }
  }

  if(userData.skills){
    let index = 1;
    for (const [skill, examples] of Object.entries(userData.skills)) {
      skillIndices.push(index)
      addSkill(skillIndices)
      const skill_name = document.getElementById(`skill-name-${index}`);
      const skill_example = document.getElementById(`skill-examples-${index}`);
      if (skill_name && skill_example) {
        skill_name.value = skill;
        if (Array.isArray(examples)) {
          console.log(examples)
          let value = examples.join(",");
          console.log(value)
          skill_example.value = value;
        }
      }
      index ++;
    }
  }

  function getValueByPath(obj, path) {
    return path.split(".").reduce((o, k) => (o || {})[k], obj);
  }
}

function addSkill(skillIndices){
  const skillsDiv = document.getElementById('skills');
  const newSkillsHtml = createSkills();
  const tempDiv6 = document.createElement('div');
  tempDiv6.innerHTML = newSkillsHtml.trim();
  const newSkillsElement = tempDiv6.firstChild;
  skillIndices.push(skills);
  
  skillsDiv.appendChild(newSkillsElement);

  // Trigger reflow and then transition
  requestAnimationFrame(() => {
      newSkillsElement.style.height = `${newSkillsElement.scrollHeight}px`;
      newSkillsElement.style.opacity = '1';
  });

  // After transition, remove inline styles and class
  newSkillsElement.addEventListener('transitionend', function handler() {
      newSkillsElement.style.height = ''; 
      newSkillsElement.style.opacity = '';
      newSkillsElement.classList.remove('collapsing-item');
      newSkillsElement.removeEventListener('transitionend', handler);
  });

  const deleteButton = newSkillsElement.querySelector('.button--delete');
  deleteButton.addEventListener('click', function() {
      const skillId = this.dataset.skillId;
      const skillToDelete = document.getElementById(`skill-${skillId}`);
      if (skillToDelete) {
        // Set height explicitly before transitioning to 0
        skillToDelete.style.height = `${skillToDelete.scrollHeight}px`;
        requestAnimationFrame(() => {
            skillToDelete.style.height = '0';
            skillToDelete.style.opacity = '0';
        });

        skillToDelete.addEventListener('transitionend', function handler() {
            skillToDelete.remove();
            skillToDelete.removeEventListener('transitionend', handler);
        });
        skillIndices = removeArrayItemOnce(skillIndices, skillId)
      }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const addProjectButton = document.getElementById('add_project_button');
    const projectsDiv = document.getElementById('projects');
    let projectIndices = []

    addProjectButton.addEventListener('click', function() {
        const newProjectHtml = createProject();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newProjectHtml.trim();
        const newProjectElement = tempDiv.firstChild;
        
        projectsDiv.appendChild(newProjectElement);
        projectIndices.push(projects);

        // Trigger reflow and then transition
        requestAnimationFrame(() => {
            newProjectElement.style.height = `${newProjectElement.scrollHeight}px`;
            newProjectElement.style.opacity = '1';
        });

        // After transition, remove inline styles and class
        newProjectElement.addEventListener('transitionend', function handler() {
            newProjectElement.style.height = ''; 
            newProjectElement.style.opacity = '';
            newProjectElement.classList.remove('collapsing-item');
            newProjectElement.removeEventListener('transitionend', handler);
        });

        const deleteButton = newProjectElement.querySelector('.button--delete');
        deleteButton.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            const projectToDelete = document.getElementById(`project-${projectId}`);
            if (projectToDelete) {
                // Set height explicitly before transitioning to 0
                projectToDelete.style.height = `${projectToDelete.scrollHeight}px`;
                requestAnimationFrame(() => {
                    projectToDelete.style.height = '0';
                    projectToDelete.style.opacity = '0';
                });

                projectToDelete.addEventListener('transitionend', function handler() {
                    projectToDelete.remove();
                    projectToDelete.removeEventListener('transitionend', handler);
                });
              projectIndices = removeArrayItemOnce(projectIndices, projectId)
            }
        });
    });

    const addExperienceButton = document.getElementById('add_experience_button');
    const experienceDiv = document.getElementById('experiences');
    let experienceIndces = []

    addExperienceButton.addEventListener('click', function() {
        const newExperienceHtml = createExperience();
        const tempDiv3 = document.createElement('div');
        tempDiv3.innerHTML = newExperienceHtml.trim();
        const newExperienceElement = tempDiv3.firstChild;
        experienceIndces.push(experiences);
        
        experienceDiv.appendChild(newExperienceElement);

        // Trigger reflow and then transition
        requestAnimationFrame(() => {
            newExperienceElement.style.height = `${newExperienceElement.scrollHeight}px`;
            newExperienceElement.style.opacity = '1';
        });

        // After transition, remove inline styles and class
        newExperienceElement.addEventListener('transitionend', function handler() {
            newExperienceElement.style.height = ''; 
            newExperienceElement.style.opacity = '';
            newExperienceElement.classList.remove('collapsing-item');
            newExperienceElement.removeEventListener('transitionend', handler);
        });

        const deleteButton = newExperienceElement.querySelector('.button--delete');
        deleteButton.addEventListener('click', function() {
            const experienceId = this.dataset.experienceId;
            const experienceToDelete = document.getElementById(`experience-${experienceId}`);
            if (experienceToDelete) {
                // Set height explicitly before transitioning to 0
                experienceToDelete.style.height = `${experienceToDelete.scrollHeight}px`;
                requestAnimationFrame(() => {
                    experienceToDelete.style.height = '0';
                    experienceToDelete.style.opacity = '0';
                });

                experienceToDelete.addEventListener('transitionend', function handler() {
                    experienceToDelete.remove();
                    experienceToDelete.removeEventListener('transitionend', handler);
                });
                experienceIndces = removeArrayItemOnce(experienceIndces, experienceId)
            }
        });
    });

    const addEducationButton = document.getElementById('add_education_button');
    const educationDiv = document.getElementById('educations');
    let educationIndices = []

    addEducationButton.addEventListener('click', function() {
        const newEducationHtml = createEducation();
        const tempDiv4 = document.createElement('div');
        tempDiv4.innerHTML = newEducationHtml.trim();
        const newEducationElement = tempDiv4.firstChild;
        educationIndices.push(educations);
        
        educationDiv.appendChild(newEducationElement);

        // Trigger reflow and then transition
        requestAnimationFrame(() => {
            newEducationElement.style.height = `${newEducationElement.scrollHeight}px`;
            newEducationElement.style.opacity = '1';
        });

        // After transition, remove inline styles and class
        newEducationElement.addEventListener('transitionend', function handler() {
            newEducationElement.style.height = ''; 
            newEducationElement.style.opacity = '';
            newEducationElement.classList.remove('collapsing-item');
            newEducationElement.removeEventListener('transitionend', handler);
        });

        const deleteButton = newEducationElement.querySelector('.button--delete');
        deleteButton.addEventListener('click', function() {
            const educationId = this.dataset.educationId;
            const educationToDelete = document.getElementById(`education-${educationId}`);
            if (educationToDelete) {
                // Set height explicitly before transitioning to 0
                educationToDelete.style.height = `${educationToDelete.scrollHeight}px`;
                requestAnimationFrame(() => {
                    educationToDelete.style.height = '0';
                    educationToDelete.style.opacity = '0';
                });

                educationToDelete.addEventListener('transitionend', function handler() {
                    educationToDelete.remove();
                    educationToDelete.removeEventListener('transitionend', handler);
                });
                educationIndices = removeArrayItemOnce(educationIndices, educationId)
            }
        });
    });

    const addCertificationButton = document.getElementById('add_certification_button');
    const certificationDiv = document.getElementById('certifications');
    let certificationIndices = []

    addCertificationButton.addEventListener('click', function() {
        const newCertificationHtml = createCertification();
        const tempDiv5 = document.createElement('div');
        tempDiv5.innerHTML = newCertificationHtml.trim();
        const newCertificationElement = tempDiv5.firstChild;
        certificationIndices.push(certifications);
        
        certificationDiv.appendChild(newCertificationElement);

        // Trigger reflow and then transition
        requestAnimationFrame(() => {
            newCertificationElement.style.height = `${newCertificationElement.scrollHeight}px`;
            newCertificationElement.style.opacity = '1';
        });

        // After transition, remove inline styles and class
        newCertificationElement.addEventListener('transitionend', function handler() {
            newCertificationElement.style.height = ''; 
            newCertificationElement.style.opacity = '';
            newCertificationElement.classList.remove('collapsing-item');
            newCertificationElement.removeEventListener('transitionend', handler);
        });

        const deleteButton = newCertificationElement.querySelector('.button--delete');
        deleteButton.addEventListener('click', function() {
            const certificationId = this.dataset.certificationId;
            const certificationToDelete = document.getElementById(`certification-${certificationId}`);
            if (certificationToDelete) {
              // Set height explicitly before transitioning to 0
              certificationToDelete.style.height = `${certificationToDelete.scrollHeight}px`;
              requestAnimationFrame(() => {
                  certificationToDelete.style.height = '0';
                  certificationToDelete.style.opacity = '0';
              });

              certificationToDelete.addEventListener('transitionend', function handler() {
                  certificationToDelete.remove();
                  certificationToDelete.removeEventListener('transitionend', handler);
              });
              certificationIndices = removeArrayItemOnce(certificationIndices, certificationId)
              
            }
        });
    });

    const addSkillsButton = document.getElementById('add_skill_button');
    let skillIndices = []

    addSkillsButton.addEventListener('click', function() {
      addSkill(skillIndices) 
    });

    const templatesDiv = document.getElementById('templates');
    templatesDiv.innerHTML = renderTemplates();
    document.getElementById('previous_template').addEventListener('click', function(){
      if (templateFocus - 1 > 0) {templateFocus --}
      templatesDiv.innerHTML = renderTemplates();
    })
    document.getElementById('next_template').addEventListener('click', function(){
      if (imageNumber - 1 >= templateFocus ) {templateFocus ++}
      templatesDiv.innerHTML = renderTemplates();
    })

    let indices = {
      "projects": projectIndices,
      "work experience": experienceIndces,
      "education": educationIndices,
      "certifications": certificationIndices,
      "skills": skillIndices
    }
    
    const generateButton = document.getElementById("generate_button");
    const generateWithAi = document.getElementById("ai_fill_button");

    generateButton.addEventListener('click', function() {
      collectData(indices);
      sessionStorage.setItem('userData', JSON.stringify(userData));
      setTimeout(() => {
        window.location.href = 'resume_2.html';
      }, 1000); // Wait for 1 second before redirecting
    })

    function promptAI() {
      console.log("loading...");
      const api = sessionStorage.getItem('AI_API');
    
      if (!api) {
        console.error("No API key found in sessionStorage");
        return;
      }
    
      sessionStorage.setItem('userData', JSON.stringify(userData));
    
      const prompt = `
      Complete the following JSON object. 
      Fill in specifically the skills, hobbies and summary (a description of the users traits and abilities based on the content already in the JSON)
      Do not include any other information besides the JSON. ${JSON.stringify(userData)}
      Return a full stringified json object in its correct format`;
    
      fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + api, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ]
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
    
        let generatedContent = data.candidates[0].content.parts[0].text;

        generatedContent = generatedContent.trim();
        if (generatedContent.startsWith("```")) {
          generatedContent = generatedContent.replace(/^```[a-z]*\n?/i, '').replace(/```$/, '').trim();
        }

        console.log(generatedContent)
    
        try {
          const completedUserData = JSON.parse(generatedContent);
          sessionStorage.setItem('userData', JSON.stringify(completedUserData));
          fillDataFromStorage(skillIndices);
        } catch (e) {
          console.error('Failed to parse Gemini response as JSON:', e);
          alert('Failed to get a complete resume from AI. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error calling Gemini API:', error);
        alert('Error communicating with AI. Please check your API key and network connection.' + '\nMessage:' +error.message);
      });
    }
    
    generateWithAi.addEventListener('click', function() {
      collectData(indices);
    
      const api_modal = document.getElementById("modal");
      const close_modal = document.getElementById("set_api");

    
      if (!sessionStorage.getItem('AI_API')) {
        console.log("No API found");
        api_modal.style.display = "block";
    
        close_modal.addEventListener('click', function() {
          sessionStorage.setItem('AI_API', document.getElementById("api_key").value);
          api_modal.style.display = "none";
          promptAI();
        }, { once: true });
    
      } else {
        promptAI();
      }
    });    

});
