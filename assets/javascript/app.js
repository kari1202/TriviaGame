
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
var questionVar;
var correctAnswer;
var correctChoice;
var timeLeft = true;

$("#start-btn").on("click",displayQA);
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





function displayQA() {
    $("#start-btn").hide();
    startClock();
    //$("#timer").text("Time Remaining: 00:15");

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
    index++;
    setTimeout(displayQA,5000);
    }
}

function reset() {

    $("#answer-0").remove();
    $("#answer-1").remove();
    $("#answer-2").remove();
    $("#answer-3").remove();
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
    $("#question").text("Time's Up!!");
    clearInterval(intervalId);
    timeLeft = false;
    setTimeout(displayQA,5000);
}

function gameOver() {
    console.log("Game Over");

}