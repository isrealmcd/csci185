let x = 100;
let y = 200;
let width = 100;
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x += speed;
    width += 3;
    //y -= speed;

    let fillColor =  '#' + Math.floor(Math.random()*16777215).toString(16);
    clear();
    fill(fillColor);
    circle(x, y, width);
    //drawGrid(canvasWidth, canvasHeight);
}
