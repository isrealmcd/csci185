const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;

//setting the variables for the current photo and caption
const imgElement = document.querySelector('.current-photo img');
const captionElement = document.querySelector('.caption');

function showImage() {
    //just sets the photo being displayed from the array to whatever idx is at
    imgElement.src = photos[idx];
    //sets caption element to display idx + 1 / 10
    captionElement.textContent = `Image ${idx + 1} of 10`;
}

function forward() {
    console.log('forward');
    idx++;

    if (idx >= photos.length) {
        idx = 0;
    }

    showImage();
}

function back() {
    console.log('back');
    idx--;

    if (idx < 0) {
        idx = photos.length - 1;
    }

    showImage();
}

showImage();

//added this so the caurosel will cycle backwards and forwards from 10 to 1 and from 1 back to 10
//i ran into issues when just using the if statements where it would only display the first two images
//and when you try to cycle back it would display "photo 0 / 10" and not display any image
document.querySelector('.carousel .btn-next').addEventListener('click', forward);
document.querySelector('.carousel .btn-prev').addEventListener('click', back); 