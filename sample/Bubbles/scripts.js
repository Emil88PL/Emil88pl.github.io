// JS Objects notations !!!

let point = {
    x:100,
    y:50
  };
 
  let col = {
    r:255,
    g:0,
    b:0
  };
 
 function setup() {
   // Once
   createCanvas(3840,2160 );  // displayWidth, displayHeight
   background(0);
   }
 
 function draw(){
   // Loop
   point.x = random(0,width);
   point.y = random(0,height);
 
   col.r = random(0,255);
   col.g = random(0,255);
   col.b = random(0,255);
 
   noStroke();
   fill(col.r,col.g,col.b,100);
   ellipse(point.x,point.y,24,24);
 }
 
//  function mousePressed(){
//    // Event
 
//  }