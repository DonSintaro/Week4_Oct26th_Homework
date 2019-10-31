// class Question {
//     constructor( question, arrayC , answer){

//         this.question = question;
//         this.arrayC = arrayC;
//         this.answer = answer;
//     }

//     get checkUserChoice (){
//         if (userChoice == answer){
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

// }

var innerC = document.querySelector("#innerC");
var userChoice;
var score;



var intro = '<div class="col-md-7 col-12"><p>Welcome to a javascript timed quiz.</p><p>Complete the quiz as fast as you can!</p><p class="noMarPad">The scores will be based accuracy of results and the speed of resulting.</p></div><div class="col-md-5 col-12" ><button id="startB" type="button" class="btn btn-dark"><h3>Start Quiz</h3></button></div>';
var quiz = '<div class="questionTitle"></div><form><input id="choiceA" type="radio" name="answer" value=""> Something<br><input id="choiceB" type="radio" name="answer" value=""> Something<br><input id="choiceC" type="radio" name="answer" value=""> Something<br><input id="choiceD" type="radio" name="answer" value=""> Something<br></form>';






innerC.innerHTML = intro;
var startBtn = document.querySelector("#startB");


startBtn.addEventListener("click",function(){
    innerC.innerHTML = quiz;   
    var questionT = document.querySelector("#questionTitle");
    var choiceA = document.querySelector("#choiceA");
    var choiceB = document.querySelector("#choiceB");
    var choiceC = document.querySelector("#choiceC");
    var choiceD = document.querySelector("#choiceD"); 



    
});






// choiceA.addEventListener("click",function(){
    
// });
// choiceB.addEventListener("click",function(){
    
// });
// choiceC.addEventListener("click",function(){
    
// });
// choiceD.addEventListener("click",function(){
    
// });

function sendQuestion(x,i){
    questionT.innerHTML = x[i].question;

}


function reorder(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }



var Questions = [
    {
        question: "Which object allows you to access functions to calculate mathematical task on numbers?",
        choices: ["Function.", "Object.","Math.","Calc."],
        answer: "Math."
    },/////

    {
        question: "What are the three building blocks of web development?",
        choices: ["Google, Facebook, Shrome", "Math, Language, Internet Speed", "C++, Python, Heroku", "HTML, CSS, Javascript"],
        answer: "HTML, CSS, Javascript"
    },/////

    {
        question: "The skeleton of a Website is built with?",
        choices: ["HTML","CSS","Javascript","Bootstrap"],
        answer: "HTML"
    },/////

    {
        question: "The styling of a Website is built with?",
        choices: ["HTML","CSS","Javascript","Bootstrap"],
        answer: "CSS"
    },/////

    {
        question: "The behavior of a Website is built with?",
        choices: ["HTML","CSS","Javascript","Bootstrap"],
        answer: "Javascript"
    },/////
];






