
var innerC = document.querySelector("#innerC");
var userChoice;
var score = 100;

var highestScores = []; // Use some function that grabs the first 5 in sorted array of scores
var arrayScores = []; // All of scores obtained through get on storage

var questionT;
var multiChoices = [];
var counter = 0;
var Btn = [];
var intro = '<div class="col-md-7 col-12"><p>Welcome to a javascript timed quiz.</p><p>Complete the quiz as fast as you can!</p><p class="noMarPad">The scores will be based accuracy of results and the speed of resulting.</p></div><div class="col-md-5 col-12" ><button id="startB" type="button" class="btn btn-dark"><h3>Start Quiz</h3></button></div>';
var quiz = '<div><div id="questionTitle"></div><form><input class="choiceA choice" type="radio" name="answer" value=""><span class="choiceA"> Something</span><br><input class="choiceB choice" type="radio" name="answer" value=""><span class="choiceB"> Something</span><br><input class="choiceC choice" type="radio" name="answer" value=""><span class="choiceC"> Something</span><br><input class="choiceD choice" type="radio" name="answer" value=""><span class="choiceD"> Something</span><br></form></div><div id="result"></div>';
var credits ='';




innerC.innerHTML = intro;
var startBtn = document.querySelector("#startB");


startBtn.addEventListener("click",function(){
    innerC.innerHTML = quiz;   
    document.querySelector("#pageHeading").innerHTML = "Quiz Time!";
    questionT = document.querySelector("#questionTitle");
    

    document.querySelectorAll(".choice").forEach(function(iter){
        iter.addEventListener("click",function(){
            userChoice = document.querySelector('.choice:checked').innerHTML;
            if (userChoice === Questions[counter-1]){
                score = score + 5;
                //prompt correct #result            --------------
            }
            else{
                //prompt wrong #result           -----------
            }
            iter.checked = false;
            if(counter < 5){
            promptQuestion(counter);
            }
            else{
                // Go to score page
                // score pages goes to high score page and local storage of scores in order of highest and retry?
                // retry eventlistener that clears page and goes to intro 
            }
        });
    });



    multiChoices.push(".choiceA");
    multiChoices.push(".choiceB");
    multiChoices.push(".choiceC");
    multiChoices.push(".choiceD"); 
    Questions = reorder(Questions);
    promptQuestion(counter);
    
});



function promptQuestion(iNum){
    questionT.innerHTML = Questions[iNum].question;
    Questions[iNum].choices = reorder(Questions[iNum].choices);
    promptChoices(iNum);
    counter++;

};

function promptChoices(x){
    for (var i = 0;i < Questions[x].choices.length;i++){
        document.querySelectorAll(multiChoices[i])[0].innerHTML = Questions[x].choices[i];
        document.querySelectorAll(multiChoices[i])[1].innerHTML = Questions[x].choices[i];
    }       

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
        question: "<h4>Which object allows you to access functions to calculate mathematical task?</h4>",
        choices: [" Function.", " Object."," Math."," Calc."],
        answer: " Math."
    },/////

    {
        question: "<h4>What are the three building blocks of web development?</h4>",
        choices: [" Google, Facebook, Shrome", " Math, Language, Internet Speed", " C++, Python, Heroku", " HTML, CSS, Javascript"],
        answer: " HTML, CSS, Javascript"
    },/////

    {
        question: "<h4>The skeleton of a Website is built with?</h4>",
        choices: [" HTML"," CSS"," Javascript"," Bootstrap"],
        answer: " HTML"
    },/////

    {
        question: "<h4>The styling of a Website is built with?</h4>",
        choices: [" HTML"," CSS"," Javascript"," Bootstrap"],
        answer: " CSS"
    },/////

    {
        question: "<h4>The behavior of a Website is built with?</h4>",
        choices: [" HTML"," CSS"," Javascript"," Bootstrap"],
        answer: " Javascript"
    },/////
];






