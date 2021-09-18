//Menu items
const rgbData = document.querySelector(".header__heading--data");

const newGame = document.querySelector("#btn--new-game");

const score = document.querySelector("#btn--score");

const levelEasy = document.querySelector("#btn--easy-level")

const levelHard = document.querySelector("#btn--hard-level")


//Start a new game
newGame.addEventListener("click", function() {
    const squareColor = document.querySelector("#square-one");
    const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
    const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    squareColor.style.backgroundColor = randromColor;
})

newGame.addEventListener("click", function() {
    const squareColor = document.querySelector("#square-two");
    const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
    const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    squareColor.style.backgroundColor = randromColor;
})
newGame.addEventListener("click", function() {
    const squareColor = document.querySelector("#square-three");
    const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
    const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    squareColor.style.backgroundColor = randromColor;
})

newGame.addEventListener("click", function() {
    const squareColor = document.querySelector("#square-four");
    const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
    const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    squareColor.style.backgroundColor = randromColor;
})
newGame.addEventListener("click", function() {
    const squareColor = document.querySelector("#square-five");
    const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
    const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    squareColor.style.backgroundColor = randromColor;
})

newGame.addEventListener("click", function() {
    const squareColor = document.querySelector("#square-six");
    const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
    const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    squareColor.style.backgroundColor = randromColor;
})