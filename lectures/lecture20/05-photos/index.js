const photos = [
    'images/poppies.jpg',
    'images/dogwoods.jpg',
    'images/blossom.jpg',
    'images/field3.jpg',
    'images/field4.jpg',
    'images/branch.jpg',
    'images/red.jpg',
    'images/purple2.jpg',
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

// Create a card for every image in the photos list using a for...of loop and
// template variables
let i = 0; //setting counter to 0 

while (i < photos.length ){ //while loop running while the counter is less than the lenght of the array
let template = `
    <div class="card" style="background-image:url('${ photos[i] }')"></div>  
`;                                                                         //used '${array name [i] }' to call the positions in the array
document.querySelector('.cards').insertAdjacentHTML('beforeend', template);
++i;     //increment by one each time ( 0,1,2,3,4,5)
}
