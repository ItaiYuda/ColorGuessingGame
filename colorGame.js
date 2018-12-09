var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var title = document.getElementsByTagName("h1")[0];
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var hardMode = true;

init();

function init(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY"? numSquares = 3: numSquares = 6;
			reset();
		})
	}
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}	
		})
	}
	reset();
}



function reset(){
	colors = generateRandomColors(numSquares);
	resetColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 
	resetBtn.textContent = "NEW COLORS";
	title.style.background = "steelblue";
	messageDisplay.textContent = "";
	colorsDisplay(numSquares);
}

resetBtn.addEventListener("click", function(){
	reset();
})


function resetColors(num){
	for(var i = 0; i < num; i++){
		squares[i].style.background = colors[i];
	}
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
	title.style.backgroundColor = color;
	resetBtn.textContent = "PLAY AGAIN?"
}

function pickColor(){
	var randNum = Math.floor((Math.random() * colors.length));
	return colors[randNum];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var str = "rgb(" + r + ", " + g + ", " + b + ")";
	return str;
}

function colorsDisplay(){
	for(var i = 3; i < squares.length; i++){
		if(numSquares === 3){
			//squares[i].classList.remove("square");
			squares[i].style.display = "none";
		}
		else{
			//squares[i].classList.add("square");
			squares[i].style.display = "block";
		}
	}
}