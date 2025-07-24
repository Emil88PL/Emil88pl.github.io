
function addProject(imageSrc, title, description, pageLink, githubLink) {
    const projectList = document.getElementById('projectList');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
        <img src="static/media/${imageSrc}" alt="${title}">
        <div class="text-block">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="buttons">
                <button onclick="window.open('${pageLing}', '_blank');">View Page</button>
                <button onclick="window.open('${githubLink}', '_blank');">View Code</button>
            </div>
        </div>
      `;
    projectList.appendChild(projectDiv);
}

// TODO - add JAVA black jack
// TODO - add JAVA REST API TASK
// TODO - add Calculator NDA

addProject('monkeyT.png', 'Monkey Type', 'Every day!', 'https://monkeytype.com/', 'https://monkeytype.com/');
addProject('Calcullo!.png', 'Calcullo!', 'Game with numbers!', 'https://calcullo.vercel.app/', 'https://github.com/Emil88PL/Calcullo'); // private repo
addProject('deepSeek.png', 'Local AI', 'Run your AI locally with Ollama help.', 'https://local-llm-deep-seek.vercel.app/', 'https://github.com/Emil88PL/Local-LLM-DeepSeek');
addProject('DidI.png', 'To do!?', 'Not ordinary todo list - sending messages to Telegram', 'https://did-i-take-it.vercel.app/', 'https://github.com/Emil88PL/DidITakeIT');
addProject('potfolio.png', 'Second Portfolio!?', 'My old portfolio on ReactJS', 'https://emil88pl.github.io/', 'https://github.com/Emil88PL/Emil88pl.github.io');
addProject('extensions.png', 'Extensions', 'My extensions', 'https://chrome-ex-ten.vercel.app/', 'https://github.com/Emil88PL/chromeEx');
addProject('raspberry.76a5451e.png', 'Raspberry Pi', 'Tinkering with Pi as a server.', 'https://github.com/Emil88PL/RaspberryPi', 'https://github.com/Emil88PL/RaspberryPi');
addProject('bubbles.be50155e.png', 'Bubbles in p5.js!', 'I am prince of darkness!', 'https://emil88pl.github.io/sample/Bubbles/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Bubbles');
addProject('Quotes.821c390f.png', 'Quotes', 'Get a random Quote, google fonts JQuery, JSON.', 'https://codepen.io/Emil88PL/full/RgardM', 'https://codepen.io/Emil88PL/pen/RgardM');
addProject('Content.2fd9c200.png', 'Content holder', 'All prepared to fetch data from API in vanilla JavaScript.', 'https://emil88pl.github.io/sample/Content%20Placeholder/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Content%20Placeholder');
addProject('Tic-tac-toe.9c09e9d8.png', 'REACT.js first app', 'Tic-tac-toe in React — classic!', 'https://emil88pl.github.io/sample/REACT!/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/REACT!');
addProject('slider.2cec0dc8.png', 'Slider', 'Vertical Slider in vanilla JavaScript and Font awesome for buttons.', 'https://emil88pl.github.io/sample/Vertical%20Slider/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Vertical%20Slider');
addProject('blurr.bea57b82.png', 'Blurr', 'Page "loading" and blurring out in vanilla JavaScript.', 'https://emil88pl.github.io/sample/Sample%201%20loading/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Sample%201%20loading');
addProject('SearchWikipedia.bb96cca1.png', 'Wikipedia', 'Wikipedia API - you can search in Wikipedia, JQuery and p5.js.', 'https://codepen.io/Emil88PL/full/KXbbxq', 'https://codepen.io/Emil88PL/pen/KXbbxq');
addProject('codePen.c4d32812.png', 'MyCodePen', 'My codePen with couple projects with vanilla JavaScript, JQuery, Bootstrap.', 'https://codepen.io/Emil88PL', 'https://codepen.io/Emil88PL/pen/bBLVLM');
addProject('choises.17fc70eb.png', 'All in vanilla JavaScript you can put your own choices and pick random one.', 'Pick one.', 'https://emil88pl.github.io/sample/Choices/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/Choices');
addProject('AddItem.c085be10.png', 'Item list', 'Add/Delete item to/from the list + search through the list with Bootstrap and vanilla JavaScript.', 'https://emil88pl.github.io/sample/DOM%20JS%202/index.html', 'https://github.com/Emil88PL/Emil88pl.github.io/tree/master/sample/DOM%20JS%202');




document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.getElementById('current-year-footer'); // Get the footer element by its ID
    if (footerElement) {
        const currentYear = new Date().getFullYear(); // Get the current year
        footerElement.textContent = `© ${currentYear} Emil Kotlowski`; // Set the text content
    }
});