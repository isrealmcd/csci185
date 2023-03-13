
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('#section1').style.backgroundColor = 'lightBlue';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section4').style.color = 'black';
    document.querySelector('#section1').style.color = 'black';  

    document.querySelector('#section1').innerHTML = "YES YES"
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.backgroundColor = 'lightGreen';
    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section4').style.color = 'black';
    document.querySelector('#section1').style.color = 'black';  
    document.querySelector('#section1').innerHTML = "Wrong Button :("
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('body').style.backgroundColor = 'hotPink';
    document.querySelector('#section3').style.backgroundColor = 'yellow';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section4').style.color = 'black';
    document.querySelector('#section1').style.color = 'black';  
    document.querySelector('#section1').innerHTML = "Wrong Button :("
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('body').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.backgroundColor = 'darkBlue';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section1').style.backgroundColor = 'white';

    document.querySelector('#section4').style.color = 'white';
    document.querySelector('#section1').style.color = 'black';  
    document.querySelector('#section1').innerHTML = "Wrong Button :("
};

function multicolor(){
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('#section4').style.backgroundColor = 'purple';
    document.querySelector('#section2').style.backgroundColor = 'lightBlue';
    document.querySelector('#section3').style.backgroundColor = 'gold';
    document.querySelector('#section1').style.backgroundColor = 'darkRed';

    document.querySelector('#section4').style.color = 'white';   
    document.querySelector('#section1').style.color = 'white';    
    document.querySelector('#section1').innerHTML = "Wrong Button :("
   
}
