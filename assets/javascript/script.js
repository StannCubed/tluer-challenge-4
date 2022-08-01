var h1El = document.querySelector("h1");
var h2El = document.querySelector("h2");
var highScoresButton = document.querySelector("#highScores");
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");

var correctAnswers = 0;
var chosenQuestion = "";
var timerStart = 60;
var seconds = " seconds remaining";

var highScores = [];

var questions = ["Commonly used data types DO Not Include:", "The condition in an if / else statement is enclosed with ______."];

var answers = {
    a0: ["strings", "booleans", "alerts", "numbers"],
    a1: ["quotes", "curly brackets", "parenthesis", "square brackets"],
}

timerEl.append(timerStart + seconds);

function countdown() {
    var timeLeft = timerStart;
    timeLeft--;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if(timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "Time's Up!";
            clearInterval(timeInterval);
            console.log("Time's up!");
        }
    }, 1000)
};

function clickStart() {
    countdown();
    var i = 0;

    h1El.textContent = questions[i];
    h2El.textContent = answers.a0
}

startButton.addEventListener("click", clickStart);