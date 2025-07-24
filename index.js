
function addProject(imageSrc, title, description) {
    const projectList = document.getElementById('projectList');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
        <img src="static/media/${imageSrc}" alt="${title}">
        <div class="text-block">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="buttons">
                <button onclick="alert('View page here!')">View Page</button>
                <button onclick="alert('View code here!')">View Code</button>
            </div>
        </div>
      `;
    projectList.appendChild(projectDiv);
}

addProject('monkeyT.png', 'Monkey Type', 'Every day!');
addProject('Calcullo!.png', 'Calcullo!', 'Game with numbers!');
addProject('deepSeek.png', 'Local AI', 'Run your AI locally with Ollama help.');
addProject('DidI.png', 'To do!?', 'Not ordinary todo list - sending messages to Telegram');
addProject('potfolio.png', 'Second Portfolio!?', 'My old portfolio on ReactJS');
addProject('extensions.png', 'Extensions', 'My extensions');
addProject('raspberry.76a5451e.png', 'Raspberry Pi', 'Tinkering with Pi as a server.');
addProject('bubbles.be50155e.png', 'Bubbles!', 'I am prince of darkness!');
addProject('Quotes.821c390f.png', 'Quotes', 'Quotes');
addProject('Content.2fd9c200.png', 'Content holder', 'Vanilla JS projects galore.');
addProject('Tic-tac-toe.9c09e9d8.png', 'REACT.js first app', 'Tic-tac-toe in React—classic!');
addProject('slider.2cec0dc8.png', 'Slider', 'Vertical slider with some flair.');
addProject('blurr.bea57b82.png', 'Blurr', 'Blurrr.');
addProject('SearchWikipedia.bb96cca1.png', 'Wikipedia', 'Wikipedia.');
addProject('codePen.c4d32812.png', 'MyCodePen', 'MyCodePen.');
addProject('choises.17fc70eb.png', 'Pick one', 'Pick one.');
addProject('AddItem.c085be10.png', 'Item list', 'Item list.');
