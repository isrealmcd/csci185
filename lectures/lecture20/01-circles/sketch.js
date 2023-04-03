function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    let y = 0;
    let x = 0;
    while (y <= 900){

        circle(100, (y), 50);
        y += 25 ;
        
    }

  
    noFill();
   
    //circle(100, 250, 50);
   // circle(100, 300, 50);
    //circle(100, 350, 50);
    //circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
