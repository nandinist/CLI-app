var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Shivam",
    score: 4,
  },

  {
    name: "Shivani",
    score: 2,
  },
  {
    name: "Ananya",
    score: 6,
  }
]


var questions = [{
  question: "Where do I live? ",
  answer: "Varanasi"
}, {
  question: "My favorite color would be? ",
  answer: "Black"
},
{
  question: "My favorite subject is ________ ",
  answer: "Science"
},
{
  question: "What I like to do? ",
  answer: "Learn different languages"
},
{
  question: "My hobby is _______ ",
  answer: "Reading"
},
{
  question: "My favorite anime would be? ",
  answer: "Death Note"
},
{
  question: "My favorite genre of books would be? ",
  answer: "Fictional"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Nandini?");
}



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Your Score: ", score);

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
