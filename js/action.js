const flower = document.getElementById("flower");
const colorWheel = document.getElementById('color-wheel');
const quoteBackground = document.getElementById('quote');
const circleElements = document.getElementsByClassName('circle');
let randomColor = 'rgb(';
const tabOfColors = ['27, 215, 228', '27, 85, 217', '27, 26, 216', '107, 26, 217', '218, 26, 210', '216, 26, 26', '219, 80, 26', '228, 226, 30', '117, 227, 27', '27, 218, 26'];

// animation wheel spin added on mouseover flower

flower.addEventListener("mouseover", function (event) {

    colorWheel.classList.add("color-wheel-animation-speed");

// set pointer

this.classList.add("pointer");
}, false);

// animation wheel spin removed on mause leave

flower.addEventListener("mouseleave", function (event) {

    colorWheel.classList.remove("color-wheel-animation-speed");

}, false);

// animation on click flower

flower.addEventListener("click", function (event) {

    // reset pointer

    this.classList.remove("pointer");
    this.classList.add("standard-cursor");

    // change visibility of wheel from hidden to visible

    quoteBackground.classList.remove("not-visible");
    quoteBackground.classList.add("visible");

    // change background for all quote circles and set random color for last background
 
    randomColor += tabOfColors[Math.floor(Math.random() * tabOfColors.length)] + ')';
    for (let i = 0; i < circleElements.length; i++) {
        circleElements[i].classList.add('back-color-change'); // add class with color-change animation
        circleElements[i].style.backgroundColor = randomColor; // set the random color
        circleElements[i].style.borderColor = randomColor; // set the random color
    }

}, false);