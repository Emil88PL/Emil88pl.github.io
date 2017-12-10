
let thub = {
"ObjecT":[ {"url":"https://codepen.io/Emil88PL/full/EvEJBP/","img":"images/WeatherAPI.png","fig":"Weather API"},
{"url":"https://codepen.io/Emil88PL/full/RgardM/","img":"images/QuoteAPI.png","fig":"Quote Machine API"},
{"url":"https://codepen.io/Emil88PL/full/KXbbxq/","img":"images/WikiAPI.png","fig":"Wiki API"},
{"url":"https://www.freecodecamp.com/emil88pl","img":"images/free.png","fig":"FreeCodeCamp"},
{"url":"https://codepen.io/Emil88PL/","img":"images/codePen.png","fig":"CodePen"},
{"url":"https://www.codeschool.com/users/Emil88","img":"images/codeSchool.png","fig":"CodeShool"},
{"url":"https://github.com/Emil88PL","img":"https://raw.githubusercontent.com/Emil88PL/img/master/Git.jpg","fig":"GitHub"},
{"url":"https://uk.linkedin.com/in/emil-kotlowski","img":"https://raw.githubusercontent.com/Emil88PL/img/master/LinkedIn.jpg","fig":"LinkedIn"},
{"url":"https://github.com/Emil88PL/img/blob/master/1%20CIW.png?raw=true","img":"https://github.com/Emil88PL/img/blob/master/1%20CIW.png?raw=true","fig":"CIW Certification"},
{"url":"https://github.com/Emil88PL/img/blob/master/2%20CIW.png?raw=true","img":"https://github.com/Emil88PL/img/blob/master/2%20CIW.png?raw=true","fig":"CIW HTML5 & CSS3"},
{"url":"https://github.com/Emil88PL/img/blob/master/3%20CIW.png?raw=true","img":"https://github.com/Emil88PL/img/blob/master/3%20CIW.png?raw=true","fig":"CIW JavaScript"},
{"url":"http//something","img":"../somwhere","fig":"i try to figureOut this..."}

]};

function setup() {
  noCanvas();
  for (let i = 0; i < 12; i++){

  	let fig = createElement('figure') ;
    fig.class('pic');

  	let img = createImg(thub.ObjecT[i].img);
  	img.class('img');

  	let a = createA(thub.ObjecT[i].url,thub.ObjecT[i].fig)
  	a.class('hm');

   	img.parent(fig);

   	a.parent(fig);
   
  }  
}