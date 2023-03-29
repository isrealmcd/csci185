let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    //noFill();
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController (ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev.code === 'ArrowUp'){
        y = y-10;
    }
    else if (ev.code === 'ArrowLeft'){
        x = x-10;
    }
    else if (ev.code === 'ArrowRight'){
        x = x+10;
    }
    else if (ev.code === 'ArrowDown'){
        y = y+10;
    }
   else if (ev.code === 'Space'){
    width = width + 20;
   }
   else if (ev.code === 'ShiftLeft'){
    width = width - 20;
   }
   //colors
   else if (ev.code === 'KeyR'){
    fillColor = 'red';
   }
   else if (ev.code === 'KeyB'){
    fillColor = 'blue';
   }
   else if (ev.code === 'KeyY'){
    fillColor = 'yellow';
   }
   else if (ev.code === 'KeyP'){
    fillColor = 'hotPink';
   }
   else if (ev.code === 'KeyG'){
    fillColor = 'green';
   }
   else if (ev.code === 'KeyN'){
    const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    fillColor = randomColor2;
   }

    
    //clears out what is drawn before ----------------------
    clear();
    //-------------------------------
    fill(fillColor)
    //noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
