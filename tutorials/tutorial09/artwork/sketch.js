
//made shapes bounce off the sides of the screen
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
    // min and max included 
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let shapes = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    const numShapes = 100;
    for (let i = 0; i < numShapes; i++) {
        const randomColor = colors[Math.floor(Math.random()*colors.length)];
        const randomColor2 = colors[Math.floor(Math.random()*colors.length)];
        const randomColor3 = colors[Math.floor(Math.random()*colors.length)];
        const x = randomInt(0, canvasWidth);
        const y = randomInt(0, canvasHeight);
        const size = randomFloat(25, 125);
        const shape = {x, y, size, color: randomColor, color2: randomColor2, color3: randomColor3, speedX: randomFloat(-5, 5), speedY: randomFloat(-5, 5)};
        shapes.push(shape);
    }
}

function draw() {
    clear();
    shapes.forEach(shape => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        
        // Bounce the shapes off the edges of the canvas:
        if (shape.x > canvasWidth - shape.size / 2 || shape.x < shape.size / 2) {
            shape.speedX = -shape.speedX;
        }
        if (shape.y > canvasHeight - shape.size / 2 || shape.y < shape.size / 2) {
            shape.speedY = -shape.speedY;
        }
        
        // Draw the shape:
        fill(shape.color);
        circle(shape.x, shape.y, shape.size);
        
        fill(shape.color2);
        square(shape.x, shape.y, shape.size);
        
        fill(shape.color3);
        triangle(
            shape.x, shape.y - shape.size / 2, 
            shape.x - shape.size / 2.25, shape.y + shape.size / 4.3,
            shape.x + shape.size / 2.25, shape.y + shape.size / 4.3
        );
    });
}