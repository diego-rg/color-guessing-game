//Create the DOM selectors
const rgbData = document.querySelector(".header__heading--data");

const newGame = document.querySelector("#btn--new-game");

const score = document.querySelector("#btn--score");

const levelEasy = document.querySelector("#btn--easy-level");

const levelHard = document.querySelector("#btn--hard-level");

const colorSquare = document.querySelectorAll(".container__square--round-border");


//Create the array with starting data to store our possible answers data
const colorsData = ["rgb(139, 163, 123)",
                    "rgb(139, 163, 123)",
                    "rgb(139, 163, 123)",
                    "rgb(139, 163, 123)",
                    "rgb(139, 163, 123)",
                    "rgb(139, 163, 123)"
                 ];


//Function that generates random colors in the array and applies them to the squares background
//The last part resets the score and creates the target/win condition
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
//It also makes the wrong answer/square disappear or, when the answer is correct, changes their color
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
//Sets the array length back to 6 and makes the squares visible
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
    changeHard();
    generateColors();
});


//Level easy button
//Sets the array length to 3 and makes the last 3 squares disappear
const changeEasy = () => {
    levelEasy.classList.add("selected-level");
    levelHard.classList.remove("selected-level");
    colorsData.splice(3, 3);
    colorSquare[3].style.display = "none";
    colorSquare[4].style.display = "none";
    colorSquare[5].style.display = "none";
};

levelEasy.addEventListener("click", function() {
    changeEasy();
    generateColors();
});

//Order of functions changed: it should first set the difficulty level (3 or 6 squares) and then generate the colors
//Otherwise, the Easy level will have a bug: the corrent answer could be in a hidden square