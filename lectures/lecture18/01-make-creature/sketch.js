function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    

    // your creature:
    fill('lightGreen')
    circle(300, 300, 300)

    fill('black')
    ellipse(250, 250, 30, 40)
    ellipse(350, 250, 30, 40)



makeCreature(900, 300, 'yellow', 'black');
makeCreature(500, 500, 'lightBlue', 'darkBlue');
makeCreature(753, 340, 'pink', 'red');

const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}
function makeCreature(x, y, fillColor, eyeColor){
    fill(fillColor);
    circle(x, y, 300);

    fill(eyeColor);
    ellipse(x - 50, y - 50, 30, 40);
    ellipse(x + 50, y - 50, 30, 40);
}

function mouseClicked(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    makeCreature(mouseX, mouseY, randomColor, randomColor2)
    
}