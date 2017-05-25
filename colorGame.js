var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// for (var i = 0; i < mode.length; i++) {
//     modeButtons[i].addEventListener("click", function () {
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         modeButtons[i].classList.add("selected");
//     });
// }

// function reset() {
//     messageDisplay.textContent = "";
//     this.textContent = "New Colors";
//     //generate new colors
//     colors = generateRandomColors(numberOfSquares);
//     //pick new color from array
//     pickedColor = pickColor();
//     //change color display
//     colorDisplay.textContent = pickedColor;
//     //change colors of squares
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
// }
easyBtn.addEventListener("click", function () {
    numberOfSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function () {
    numberOfSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick new color from array
    pickedColor = pickColor();
    //change color display
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function () {
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}


var changeColors = function (color) {
    //loop through the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and add to array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //pick red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}