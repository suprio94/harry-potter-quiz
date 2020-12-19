var readlineSync = require("readline-sync");
var score=0;
var userName= readlineSync.question("May I know your name? "
)
console.log("Welcome "+userName+" to the Harry Potter Quiz!!!")

var quiz=[{
 question: "What was Harry's mother's name? ",
 answer: "Lily"
},
{
 question: "Which university was Harry admitted to? ",answer: "Hogwarts"
},

{
  question: "Who was Harry's Godfather? ",
  answer: "Sirius"
}
]

var topScores=[
  {
    userName:"Suprio",
    score:3
  },
  {
    userName:"Tom",
    score:2
  }
]

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()=== answer.toUpperCase()){
      console.log("Correct!!!");
      score=score+1;
  }
  else{
    console.log("Wrong!!!");
     }

  console.log("Current Score is: "+ score);
  console.log("------------------------");
}

for (i=0;i<quiz.length;i++){
  var currentQuestion= quiz[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Yay!! You have scored "+ score+ " points")
console.log("Check out the high scores, if you should be there send me a screenshot of your score.");

for(var j=0;j<topScores.length;j++){
console.log(topScores[j]);
} 
