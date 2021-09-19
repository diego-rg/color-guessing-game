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
        const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        colorsData[i] = randromColor;
        colorSquare[i].style.backgroundColor = randromColor;
        rgbData.innerText = colorsData[Math.floor(Math.random() * colorsData.length)];
        colorSquare[i].style.visibility = "visible";
        score.innerText = "";
    }
};

generateColors();


//Event to start a new game when clicking that button
newGame.addEventListener("click", generateColors);


//Check if the answer is correct
const checkAnswer = () => {
    for (let i=0; i<colorsData.length; i++) {
        colorSquare[i].addEventListener("click", function(){
            if (colorSquare[i].style.backgroundColor === rgbData.innerText) {
                score.innerText = "Correct!";
                for (let i=0; i<colorsData.length; i++) {
                    colorSquare[i].style.visibility = "visible";
                    colorSquare[i].style.backgroundColor = rgbData.innerText;
                }
            } else {
                score.innerText = "Try again!";
                colorSquare[i].style.visibility = "hidden";
            }
        })
    }
};

checkAnswer();


//Level hard button
const changeHard = () => {
    levelHard.classList.add("selected-level");
    levelEasy.classList.remove("selected-level");
    if (colorsData.length === 3) {
         colorsData.push("rgb(139, 163, 123)", "rgb(139, 163, 123)", "rgb(139, 163, 123)");
    }
    colorSquare[3].style.display = "initial";
    colorSquare[4].style.display = "initial";
    colorSquare[5].style.display = "initial";
};

levelHard.addEventListener("click", function() {
    generateColors();
    changeHard();
});


//Level easy button
const changeEasy = () => {
    levelEasy.classList.add("selected-level");
    levelHard.classList.remove("selected-level");
    colorsData.splice(3, 3);
    colorSquare[3].style.display = "none";
    colorSquare[4].style.display = "none";
    colorSquare[5].style.display = "none";
};

levelEasy.addEventListener("click", function() {
    generateColors();
    changeEasy();
});