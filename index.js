
function addProject(imageSrc, title, description, pageLink, githubLink, projectId) {
    const projectList = document.getElementById('projectList');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.id = projectId; // Add unique ID to the project div

    projectDiv.innerHTML = `
        <a href="${pageLink}" target="_blank" class="project-image-link">
            <img src="static/media/${imageSrc}" alt="${title}">
        </a>
        <div class="text-block">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="buttons">
                <button class="view-page-btn" onclick="window.open('${pageLink}', '_blank');">View Page</button>
                <button class="view-git-btn" onclick="window.open('${githubLink}', '_blank');">View Code</button>
            </div>
        </div>
      `;
    projectList.appendChild(projectDiv);
}

// Function to disable view code button for specific project
function disableViewCodeButton(projectId) {
    const project = document.getElementById(projectId);
    if (project) {
        const viewCodeBtn = project.querySelector('.view-git-btn');
        if (viewCodeBtn) {
            viewCodeBtn.disabled = true;
            viewCodeBtn.style.opacity = '0.5';
            viewCodeBtn.style.cursor = 'not-allowed';
            viewCodeBtn.onclick = null; // Remove click handler
        }

        // const imageLink = project.querySelector('.project-image-link');
        // if (imageLink) {
        //     imageLink.style.pointerEvents = 'none';
        //     imageLink.style.cursor = 'default';
        // }
    }
}

// TODO - add JAVA black jack

// TODO - add Calculator NDA
// TODO - add hyperSkill

document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.getElementById('current-year-footer');
    if (footerElement) {
        const currentYear = new Date().getFullYear();
        footerElement.textContent = `© ${currentYear} Emil Kotlowski`;
    }

    const arrow = document.getElementById('arrow-down');
    let projectsLoaded = false;

    arrow.addEventListener('click', () => {
        if (!projectsLoaded) {
            loadProjects(); // Call function that adds all projects
            projectsLoaded = true;

            // Disable specific buttons after projects are loaded
            disableViewCodeButton('monkey-type');
        }
    });
});

function loadProjects() {
    addProject('monkeyT.png', 'Monkey Type', 'Typing at 104 words per minute isn\'t just fast - it\'s a sign of fluid thought and precision, which are hallmarks of great programmers.', 'https://monkeytype.com/', 'https://monkeytype.com/', 'monkey-type');
    addProject('JavaSpringBootAPI.png', 'Java Spring boot API', 'Java 21, Spring Boot v3.5.0 and front-end with JS \<br> (You can click \"View code\" button to check the README file for more info)', 'https://monkeytype.com/', 'https://github.com/Emil88PL/back-front-task', 'JavaSpringBoot');
    addProject('Calcullo!.png', 'Calcullo!', 'An educational Mario-style game built with JavaScript to help my niece learn counting.', 'https://calcullo.vercel.app/', 'https://emil88pl.github.io/pages/privateRepo.html', 'calcullo');
    addProject('deepSeek.png', 'Local AI', 'Run your AI locally with Ollama help.', 'https://local-llm-deep-seek.vercel.app/', 'https://github.com/Emil88PL/Local-LLM-DeepSeek', 'local-ai');
    addProject('DidI.png', 'To do!?', 'A simple JavaScript-based medication reminder that use localStorage. Supports alerts with telegram push notification.', 'https://did-i-take-it.vercel.app/', 'https://github.com/Emil88PL/DidITakeIT', 'todo');
    addProject('potfolio.png', 'Second Portfolio!?', 'My old portfolio on ReactJS', 'https://emil88pl.github.io/', 'https://github.com/Emil88PL/Emil88pl.github.io', 'second-portfolio');
    addProject('extensions.png', 'Extensions', 'Helpful AI tools to simplify and explain any text', 'https://chrome-ex-ten.vercel.app/', 'https://github.com/Emil88PL/chromeEx', 'extensions');
    addProject('raspberry.76a5451e.png', 'Raspberry Pi', 'Using a Raspberry Pi as a lightweight server with motion detection is a practical and cost-effective setup for home automation or surveillance.', 'https://github.com/Emil88PL/RaspberryPi', 'https://github.com/Emil88PL/RaspberryPi', 'raspberry-pi');
    addProject('bubbles.be50155e.png', 'Bubbles in p5.js!', 'Bubbles? I am prince of darkness!', 'https://emil88pl.github.io/sample/Bubbles/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Bubbles', 'bubbles');
    addProject('Quotes.821c390f.png', 'Quotes', 'Get a random Quote, google fonts JQuery, JSON.', 'https://codepen.io/Emil88PL/full/RgardM', 'https://codepen.io/Emil88PL/pen/RgardM', 'quotes');
    addProject('Content.2fd9c200.png', 'Content holder', 'All prepared to fetch data from API in vanilla JavaScript.', 'https://emil88pl.github.io/sample/Content%20Placeholder/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Content%20Placeholder', 'content-holder');
    addProject('Tic-tac-toe.9c09e9d8.png', 'REACT.js first app', 'Tic-tac-toe in React — classic!', 'https://emil88pl.github.io/sample/REACT!/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/REACT!', 'tic-tac-toe');
    addProject('slider.2cec0dc8.png', 'Slider', 'Vertical Slider in vanilla JavaScript and Font awesome for buttons.', 'https://emil88pl.github.io/sample/Vertical%20Slider/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Vertical%20Slider', 'slider');
    addProject('blurr.bea57b82.png', 'Blurr', 'Page "loading" and blurring out in vanilla JavaScript.', 'https://emil88pl.github.io/sample/Sample%201%20loading/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Sample%201%20loading', 'blurr');
    addProject('SearchWikipedia.bb96cca1.png', 'Wikipedia', 'Wikipedia API - you can search in Wikipedia, JQuery and p5.js.', 'https://codepen.io/Emil88PL/full/KXbbxq', 'https://codepen.io/Emil88PL/pen/KXbbxq', 'wikipedia');
    addProject('codePen.c4d32812.png', 'MyCodePen', 'My codePen with couple projects with vanilla JavaScript, JQuery, Bootstrap.', 'https://codepen.io/Emil88PL', 'https://codepen.io/Emil88PL/pen/bBLVLM', 'codepen');
    addProject('choises.17fc70eb.png', 'All in vanilla JavaScript you can put your own choices and pick random one.', 'Pick one.', 'https://emil88pl.github.io/sample/Choices/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Choices', 'choices');
    addProject('AddItem.c085be10.png', 'Item list', 'Add/Delete item to/from the list + search through the list with Bootstrap and vanilla JavaScript.', 'https://emil88pl.github.io/sample/DOM%20JS%202/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/DOM%20JS%202', 'item-list');
}