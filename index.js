
function addProject(imageSrc, title, description, pageLink, githubLink, projectId) {
    const projectList = document.getElementById('projectList');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.id = projectId; // Add unique ID to the project div

    projectDiv.innerHTML = `
        <a href="${pageLink}" target="_blank" class="project-image-link">
            <img src="static/media/${imageSrc}" loading="lazy" alt="${title}">
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

function disableViewPageButton(projectId) {
    const project = document.getElementById(projectId);
    if (project) {
        const viewPageBtn = project.querySelector('.view-page-btn');
        if (viewPageBtn) {
            viewPageBtn.disabled = true;
            viewPageBtn.style.opacity = '0.5';
            viewPageBtn.style.cursor = 'not-allowed';
            viewPageBtn.onclick = null; // Remove click handler
        }

        const imageLink = project.querySelector('.project-image-link');
        if (imageLink) {
            imageLink.style.pointerEvents = 'none';
            imageLink.style.cursor = 'default';
        }
    }
}

function downloadScript(projectId) {
    const project = document.getElementById(projectId);

    if (project) {
        const viewPageBtn = project.querySelector('.view-page-btn');
        if (viewPageBtn) {
            viewPageBtn.textContent = "Download";
            viewPageBtn.onclick = function () {
                const link = document.createElement("a");
                link.href = "/download/Olifant.py";
                link.download = "Olifant.py";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        }
    }
}


// TODO - add JAVA black jack

// TODO - add Calculator NDA


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
            disableViewPageButton('JavaSpringBoot');
            downloadScript('Olifant')
        }

        // Show the up arrow
        const arrowUp = document.getElementById('arrow-up');
        arrowUp.style.display = 'block';

        // Add scroll to top functionality (only once)
        if (!arrowUp.hasAttribute('data-listener-added')) {
            arrowUp.setAttribute('data-listener-added', 'true');
            arrowUp.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // After scrolling, hide up arrow
                setTimeout(() => {
                    arrowUp.style.display = 'none';
                }, 500);
            });
        }
    });

    // Use Intersection Observer to show arrow when scrolling to bottom
    // This is more efficient than scroll event listeners
    setupBottomObserver();

    // Initialize floating stars and quotes
    createStars();
    startStarQuotes();
});

function addDownloadExeButton(projectId, filename = "BuddyTerminal.exe") {
    const project = document.getElementById(projectId);

    if (project) {
        const buttonsDiv = project.querySelector('.buttons');
        if (buttonsDiv) {
            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'download-exe-btn';
            downloadBtn.textContent = "Download";

            // Tooltip text on hover
            downloadBtn.title = "Yes .exe file!";

            // Download handler
            downloadBtn.onclick = function () {
                const link = document.createElement("a");
                link.href = "/download/" + filename;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };

            buttonsDiv.appendChild(downloadBtn);
        }
    }
}


// --- Floating Stars & Quotes Feature ---
const STAR_COUNT = 42;
const DIRECTION_CHANGE_INTERVAL = 13000;
const STAR_SPEED = 0.3;
const STAR_QUOTES_MIN_INTERVAL = 4000;
const STAR_QUOTES_MAX_INTERVAL = 8000;

const POSITIVE_ATTRIBUTES = [
    "Punctual",
    "Reliable",
    "Detail-oriented",
    "Problem solver",
    "Team player",
    "Fast learner",
    "Creative",
    "Dedicated",
    "Communicative",
    "Adaptable",
    "Proactive",
    "Curious",
    "Resilient",
    "Analytical",
    "Self-motivated",
    "Organized",
    "Resourceful",
    "Collaborative",
    "Focused",
    "Versatile"
];

const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -0.7, y: -0.7 },
    { x: 0.7, y: -0.7 },
    { x: -0.7, y: 0.7 },
    { x: 0.7, y: 0.7 }
];

let starQuotesInterval = null;
let currentQuoteBubble = null;
let currentQuoteStar = null;
let quoteAnimationFrame = null;

function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;

    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const sizeClass = Math.random() < 0.33 ? 'small' : (Math.random() < 0.5 ? 'medium' : 'large');
        star.classList.add(sizeClass);

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = x + '%';
        star.style.top = y + '%';

        const starData = {
            element: star,
            x: x,
            y: y,
            direction: directions[Math.floor(Math.random() * directions.length)],
            speed: STAR_SPEED + (Math.random() * 0.2)
        };

        stars.push(starData);
        container.appendChild(star);
    }

    function animateStars() {
        stars.forEach(star => {
            star.x += star.direction.x * star.speed * 0.1;
            star.y += star.direction.y * star.speed * 0.1;

            if (star.x < -2) star.x = 102;
            if (star.x > 102) star.x = -2;
            if (star.y < -2) star.y = 102;
            if (star.y > 102) star.y = -2;

            star.element.style.left = star.x + '%';
            star.element.style.top = star.y + '%';
        });

        requestAnimationFrame(animateStars);
    }

    function changeDirections() {
        stars.forEach(star => {
            star.direction = directions[Math.floor(Math.random() * directions.length)];
        });
    }

    animateStars();
    setInterval(changeDirections, DIRECTION_CHANGE_INTERVAL);
}

function getRandomQuote() {
    return POSITIVE_ATTRIBUTES[Math.floor(Math.random() * POSITIVE_ATTRIBUTES.length)];
}

function getRandomStar() {
    const container = document.getElementById('stars-container');
    if (!container || container.children.length === 0) return null;
    const stars = container.querySelectorAll('.star');
    return stars[Math.floor(Math.random() * stars.length)];
}

function updateQuotePosition() {
    if (!currentQuoteBubble || !currentQuoteStar) return;

    const rect = currentQuoteStar.getBoundingClientRect();
    currentQuoteBubble.style.left = (rect.left + rect.width / 2) + 'px';
    currentQuoteBubble.style.top = (rect.top - 25) + 'px';

    quoteAnimationFrame = requestAnimationFrame(updateQuotePosition);
}

function showQuoteBubble() {
    if (currentQuoteBubble) {
        currentQuoteBubble.remove();
        currentQuoteBubble = null;
    }

    if (quoteAnimationFrame) {
        cancelAnimationFrame(quoteAnimationFrame);
        quoteAnimationFrame = null;
    }

    const star = getRandomStar();
    if (!star) return;

    const quote = getRandomQuote();

    const bubble = document.createElement('div');
    bubble.className = 'star-quote-bubble';
    bubble.textContent = quote;

    currentQuoteStar = star;

    const rect = star.getBoundingClientRect();
    bubble.style.left = (rect.left + rect.width / 2) + 'px';
    bubble.style.top = (rect.top - 25) + 'px';

    document.body.appendChild(bubble);
    currentQuoteBubble = bubble;

    quoteAnimationFrame = requestAnimationFrame(updateQuotePosition);

    setTimeout(() => {
        if (quoteAnimationFrame) {
            cancelAnimationFrame(quoteAnimationFrame);
            quoteAnimationFrame = null;
        }
        if (bubble && bubble.parentNode) {
            bubble.classList.add('fade-out');
            setTimeout(() => {
                if (bubble && bubble.parentNode) {
                    bubble.remove();
                }
                if (currentQuoteBubble === bubble) {
                    currentQuoteBubble = null;
                    currentQuoteStar = null;
                }
            }, 500);
        }
    }, 4500);
}

function startStarQuotes() {
    if (starQuotesInterval) {
        clearTimeout(starQuotesInterval);
    }

    function scheduleNext() {
        const delay = Math.random() * (STAR_QUOTES_MAX_INTERVAL - STAR_QUOTES_MIN_INTERVAL) + STAR_QUOTES_MIN_INTERVAL;
        starQuotesInterval = setTimeout(() => {
            showQuoteBubble();
            scheduleNext();
        }, delay);
    }

    scheduleNext();
}

function loadProjects() {
    addProject('FormFiler.png', 'Form Filler', 'A desktop application for automating web form submission. Load a CSV file, point it at any web form, map your columns to the detected fields, and watch the browser fill every row in real time.', 'https://github.com/Emil88PL/FormFiller', 'https://github.com/Emil88PL/FormFiller', 'FormFiller');
    addProject('DidI.png', 'Did I Take It?', 'A simple JavaScript-based medication reminder that use localStorage. Supports alerts with telegram push notification.', 'https://did-i-take-it.vercel.app/', 'https://github.com/Emil88PL/DidITakeIT', 'todo');
    addProject('BuddyTerminal.png', 'Buddy Terminal', 'Buddy Terminal is a Python-based terminal UI that displays your daily tasks from the DidITakeIT web app in a beautiful, real-time dashboard. Keep track of your tasks without leaving your terminal!', 'https://github.com/Emil88PL/Buddy-Terminal', 'https://github.com/Emil88PL/Buddy-Terminal', 'Buddy-Terminal');
    addProject('Task Buddy.png', 'Task Buddy', 'Meet AI Super Buddy – the ultimate productivity sidekick for the Did I Take It? app. It reads your tasks, fires up your motivation with inspiring messages, and gets you moving. Runs locally with Ollama + LLaMA 3, so your data stays private and your workflow stays smooth. (version 1.0.4 support TTS)', 'https://chrome-ex-ten.vercel.app/', 'https://chrome-ex-ten.vercel.app/', 'taskBuddy');
    addProject('Olifant.png', 'Olifant TODO Tracker 🐘', '      A lightweight, read-only development tool that scans your project for TODO comments and generates a comprehensive report with Git blame integration.  Stop losing track of code tasks. Just write TODO: fix this in your code—Olifant finds it, checks who wrote it and when, and compiles everything into a clean TODO_LIST.md report.', 'https://github.com/Emil88PL/Olifant', 'https://github.com/Emil88PL/Olifant', 'Olifant');
    addProject('monkeyT.png', 'Monkey Type', 'Typing at 113 words per minute isn\'t just fast - it\'s a sign of fluid thought and precision, which are hallmarks of great programmers.', 'https://monkeytype.com/', 'https://monkeytype.com/', 'monkey-type');
    addProject('extensions.png', 'Extensions', 'Helpful AI tools to simplify and explain any text, download directly "Olifant TODO Tracker" script, "Task buddy" (Linux/Windows), "AI Extensions"', 'https://chrome-ex-ten.vercel.app/', 'https://github.com/Emil88PL/chromeEx', 'extensions');
    addProject('JavaSpringBootAPI.png', 'Java Spring boot API', 'Java 21, Spring Boot v3.5.0 and front-end with JS \<br> (You can click \"View code\" button to check the README file for more info)', 'https://', 'https://github.com/Emil88PL/back-front-task', 'JavaSpringBoot');
    addProject('Calcullo!.png', 'Calcullo!', 'An educational Mario-style game built with JavaScript to help my niece learn counting.', 'https://calcullo.vercel.app/', 'https://emil88pl.github.io/pages/privateRepo.html', 'calcullo');
    addProject('deepSeek.png', 'Local AI', 'Run your AI locally with Ollama help.', 'https://local-llm-deep-seek.vercel.app/', 'https://github.com/Emil88PL/Local-LLM-DeepSeek', 'local-ai');
    addProject('potfolio.png', 'Second Portfolio!?', 'My old portfolio on ReactJS', 'https://emil88pl.github.io/', 'https://github.com/Emil88PL/Emil88pl.github.io', 'second-portfolio');
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
    addDownloadExeButton('Buddy-Terminal');
    addDownloadExeButton('taskBuddy', 'Task Buddy Setup 1.0.8.exe');
}

// Intersection Observer - detects when user scrolls to bottom
// Much more efficient than scroll event listeners - runs on compositor thread
function setupBottomObserver() {
    // Create a sentinel element at the very bottom to detect
    const sentinel = document.createElement('div');
    sentinel.id = 'bottom-sentinel';
    sentinel.style.height = '1px';
    sentinel.style.width = '1px';
    sentinel.style.pointerEvents = 'none'; // Invisible to user
    
    // Insert sentinel after the footer
    const footer = document.getElementById('current-year-footer');
    if (footer && footer.parentNode) {
        footer.parentNode.insertBefore(sentinel, footer.nextSibling);
    } else {
        // Fallback: append to body if footer not found
        document.body.appendChild(sentinel);
    }

    // Create the observer with options
    const options = {
        root: null, // Use viewport as root
        rootMargin: '0px 0px 100px 0px', // Trigger 100px before hitting bottom
        threshold: 0 // Trigger as soon as 1px is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // User has scrolled to (or near) the bottom
                const arrowUp = document.getElementById('arrow-up');
                if (arrowUp) {
                    arrowUp.style.display = 'block';
                    
                    // Add click handler if not already added
                    if (!arrowUp.hasAttribute('data-listener-added')) {
                        arrowUp.setAttribute('data-listener-added', 'true');
                        arrowUp.addEventListener('click', (e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            
                            // Hide after scrolling to top
                            setTimeout(() => {
                                arrowUp.style.display = 'none';
                            }, 500);
                        });
                    }
                }
            }
        });
    }, options);

    // Start observing the sentinel
    observer.observe(sentinel);
}