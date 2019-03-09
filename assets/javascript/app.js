
//Questions and answers
var triviaArr = [
    {
        question: "What type of farm does Dwight own?",
        choices: ["Bear farm", "Carrot farm", "Beet farm", "Beetle farm"],
        answer: 2
    },
    {
        question: "What name did Pam and Angela fight over for their babies?",
        choices: ["Phillip", "Benjamin", "Andrew", "James"],
        answer: 0
    },
    {
        question: "Where do Jim and Pam share their first real kiss?",
        choices: ["The roof", "Jim's desk", "The warehouse", "The parking lot"],
        answer: 1
    },
    {
        question: "Which of Angela's cats does Dwight freeze?",
        choices: ["Bandit", "Sparkles", "Sprinkles", "Fluffy"],
        answer: 2
    },
    {
        question: "What tatoo is Andy forced to get?",
        choices: ["A wolf", "A nard dog", "A naked man", "The Cornell logo"],
        answer: 1
    },
    {
        question: "Which office member was having an affair with Angela's fiance, the senator?",
        choices: ["Andy", "Kelly", "Erin", "Oscar"],
        answer: 3
    },
    {
        question: "What was Plan A for Jim's wedding?",
        choices: ["Marrying her a long time ago, pretty much the day he met her", "Vegas", "Marrying her after the baby was born", "A small beach wedding"],
        answer: 0
    },
    {
        question: "Who ruined Pam's pregnancy secret during the wedding weekend?",
        choices: ["Andy", "Michael", "Holly", "Jim"],
        answer: 3
    },
    {
        question: "What is Michael's username for the online dating website?",
        choices: ["Ready for marriage", "Kid crazy", "Little kid lover", "Looking for woman"],
        answer: 2
    },
    {
        question: "What type of car does Dwight drive?",
        choices: ["Corvette", "Trans Am", "Camaro", "Prius"],
        answer: 1
    }
]

var intervalID;

var index = 0;
var time;
var answeredCorrect = 0;
var answeredIncorrect = 0;
var unanswered = 0;
var questionVar;
var correctAnswer;
var correctChoice;
var timeLeft = true;

//var audio = new Audio("office.mp3");

$("#start-btn").on("click",displayQA);
//$(document).on("click", "#start-btn", displayQA);
$(document).on("click", "#answer-0", function() {
    checkAnswer(0);
})
$(document).on("click", "#answer-1", function() {
    checkAnswer(1);
})
$(document).on("click", "#answer-2", function() {
    checkAnswer(2);
})
$(document).on("click", "#answer-3", function() {
    checkAnswer(3);
})
$(document).on("click", "#start-new-btn", function() {
    startNewGame();
})


function displayQA() {
    $("#start-btn").hide();

    startClock();
    questionVar = triviaArr[index].question;
    $("#question").text(questionVar);

    for (i=0; i<triviaArr[index].choices.length; i++) {
        var name = triviaArr[index].choices[i];
        console.log(name);
        var answerButton = '<button type="button" class="btn btn-primary btn-lg btn-block" id="answer-' + i + '">' + name + "</button>";
        $(".answer-main").append(answerButton);
        console.log(answerButton);
    }
}

function startClock() {
    timeLeft = true;
    time = 15;
    $("#timer").text("Time Remaining: 00:" + time);
    intervalId = setInterval(count, 1000);
}

function checkAnswer(chosenAnswer) {

    if(timeLeft) {
    clearInterval(intervalId);
    timeLeft = false;

    correctAnswer = triviaArr[index].answer;
    correctChoice = triviaArr[index].choices[correctAnswer];

    if(chosenAnswer === correctAnswer) {
        $("#question").text("That's Correct!!");
        answeredCorrect++;
    } else {
        $("#question").text("Wrong!! The correct answer is: " + correctChoice);
        answeredIncorrect++;
    }

    reset();

    }
}

function reset() {

    index++;

    $("#answer-0").remove();
    $("#answer-1").remove();
    $("#answer-2").remove();
    $("#answer-3").remove();

    if (index >= triviaArr.length) {
        gameOver();
    } else {
        setTimeout(displayQA,2000);
    }
}

function count() {
    time--;

    if (time < 10) {
        time = "0" + time;
    }

    if (time >= 0) {
        $("#timer").text("Time Remaining: 00:" + time);
    } else {
        timeUp();
    }    
}

function timeUp() {
    correctAnswer = triviaArr[index].answer;
    correctChoice = triviaArr[index].choices[correctAnswer];
    $("#question").text("Time's Up!!  The correct answer was: " + correctChoice);
    unanswered++;
    clearInterval(intervalId);
    timeLeft = false;

    reset();
}

function gameOver() {

    $("#timer").empty();
    var startNewButton = '<button type="button" class="btn btn-light" id="start-new-btn">Start New Game</button>';
    $(".answer-main").append(startNewButton);
    $("#question").text("Game Over!!  Here's how you did!");
    $("#correct").html("<h4>Correct Answers: " + answeredCorrect + "</h4>")
    $("#incorrect").html("<h4>Incorrect Answers: " + answeredIncorrect + "</h4>")
    $("#unanswered").html("<h4>Unanswered: " + unanswered + "</h4>")
}

function startNewGame() {

    console.log("Hit start new game");
    index=0;
    answeredCorrect = 0;
    answeredIncorrect = 0;
    unanswered = 0;

    $("#correct").empty();
    $("#incorrect").empty();
    $("#unanswered").empty();
    $("#startNewButton").remove();

    $("#start-new-btn").remove();

    displayQA();
}