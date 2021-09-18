//Create the DOM selectors
const rgbData = document.querySelector(".header__heading--data");

const newGame = document.querySelector("#btn--new-game");

const score = document.querySelector("#btn--score");

const levelEasy = document.querySelector("#btn--easy-level");

const levelHard = document.querySelector("#btn--hard-level");

const colorSquare = document.querySelectorAll(".container__square--round-border");

//Create the array with starting data
const colorsData = ["rgb(139, 163, 123)",
    "rgb(139, 163, 123)",
    "rgb(139, 163, 123)",
    "rgb(139, 163, 123)",
    "rgb(139, 163, 123)",
    "rgb(139, 163, 123)"
    ];

//Function that generates random colors in the array and applies them to the squares background
const generateColors = () => {
    for (let i=0; i<colorsData.length; i++) {
        const rgb1 = Math.floor(Math.random() * 255);
        const rgb2 = Math.floor(Math.random() * 255);
        const rgb3 = Math.floor(Math.random() * 255);
        const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3}`;
        colorsData[i] = randromColor;
        colorSquare[i].style.backgroundColor = randromColor;
    }
}

generateColors();

// const generateColors = (num) => {
//     const rgb1 = Math.floor(Math.random() * 255);
//     const rgb2 = Math.floor(Math.random() * 255);
//     const rgb3 = Math.floor(Math.random() * 255);
//     const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3}`;
//     colorsData[num] = randromColor;
// }
// generateColors(0);
// generateColors(1);
// generateColors(2);
// generateColors(3);
// generateColors(4);
// generateColors(5);



// for (let i=0; i<=squareColor.length; i++) {
//     const squareColor = document.querySelector(".container__square--round-border");
//     const rgb1 = Math.floor(Math.random() * 255);
//     const rgb2 = Math.floor(Math.random() * 255);
//     const rgb3 = Math.floor(Math.random() * 255);
//     const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     squareColor.style.backgroundColor = randromColor;
//     return colorsData;
// }

// newGame.addEventListener("click", function() {
//     const squareColorOne = document.querySelector("#square-one");
//     const rgb1 = Math.floor(Math.random() * 255);
//     const rgb2 = Math.floor(Math.random() * 255);
//     const rgb3 = Math.floor(Math.random() * 255);
//     const randromColorOne = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     squareColorOne.style.backgroundColor = randromColorOne;
// });

// newGame.addEventListener("click", function() {
//     const squareColorTwo = document.querySelector("#square-two");
//     const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const randromColorTwo = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     squareColorTwo.style.backgroundColor = randromColorTwo;
// });

// newGame.addEventListener("click", function() {
//     const squareColorThree = document.querySelector("#square-three");
//     const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const randromColorThree = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     squareColorThree.style.backgroundColor = randromColorThree;
// });







//Start a new game
// newGame.addEventListener("click", function() {
//     const squareColorOne = document.querySelector("#square-one");
//     const rgb1 = Math.floor(Math.random() * 255);
//     const rgb2 = Math.floor(Math.random() * 255);
//     const rgb3 = Math.floor(Math.random() * 255);
//     const randromColorOne = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     squareColorOne.style.backgroundColor = randromColorOne;
// });

// newGame.addEventListener("click", function() {
//     const squareColorTwo = document.querySelector("#square-two");
//     const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const randromColorTwo = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     squareColorTwo.style.backgroundColor = randromColorTwo;
// });

// newGame.addEventListener("click", function() {
//     const squareColorThree = document.querySelector("#square-three");
//     const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
//     const randromColorThree = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     squareColorThree.style.backgroundColor = randromColorThree;
// });