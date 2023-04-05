//The data:
const person = { 
    name: "Jane", 
    pic: "images/patrick.png", 
    score: 300 
};


//targeting main, put card inside main, image is person.pic
document.querySelector('main').insertAdjacentHTML(
    "beforeend", 
    `<img src="${person.pic}">
    <p>${person.name}'s high score is: ${person.score}</p>
    `
);

