
var innerC = document.querySelector("#innerC");
var userChoice = "";
var score = 100;


var arrayScores = [33]; 
arrayScores = JSON.parse(localStorage.getItem('Scores')) || [];
arrayPlayers = JSON.parse(localStorage.getItem('Players')) || [];

var arrayPlayers; 

function sortNums(){
    for (var i = 0;i<arrayScores.length;i++){
        for(var c = 0;c <(arrayScores.length-1); c++){
            if (arrayScores[c] < (arrayScores[c+1])){
                var buffer;

                buffer = arrayScores[c]; 
                arrayScores[c] = arrayScores[c+1];
                arrayScores[c+1] = buffer;

                buffer = arrayPlayers[c]; 
                arrayPlayers[c] = arrayPlayers[c+1];
                arrayPlayers[c+1] = buffer;
            }
        }   
    }
}

var clearSt = false;
var questionT;
var multiChoices = [];
var counter = 0;
var timer = 50;
var finished = false;
var timedDisplay = false;
var timedDisLength = 2;
var running = false;

var intro = '<div class="col-md-7 col-12"><p>Welcome to a javascript timed quiz.</p><p>Complete the quiz as fast as you can!</p><p class="noMarPad">The scores will be based accuracy of results and the speed of resulting.</p></div><div class="col-md-5 col-12" ><button id="startB" type="button" class="btn btn-dark startB"><h3>Start Quiz</h3></button></div>';
var quiz = '<div class="maxWidthDiv"><div id="questionTitle"></div><form><input class="choiceA choice" type="radio" name="answer" value="1"><span class="choiceA"> Something</span><br><input class="choiceB choice" type="radio" name="answer" value="2"><span class="choiceB"> Something</span><br><input class="choiceC choice" type="radio" name="answer" value="3"><span class="choiceC"> Something</span><br><input class="choiceD choice" type="radio" name="answer" value="4"><span class="choiceD"> Something</span><br></form><div id="result">Not Working</div> </div>';
var creditsA ='<div class="scoreBoard"><h2 class="scorePrep">Your Score</h2></div><div class="scoreBoard"><h3 class="yourScore"> Score</h3></div><br/><br/><br/><div class="input-group mb-3"><div class="input-group-prepend"><button class="btn btn-outline-secondary submitBtn" type="button" id="button-addon1">Submit</button></div><input type="text" class="form-control nameToSub" placeholder="Your name here....." aria-label="Example text with button addon" aria-describedby="button-addon1"></div>';
var creditsB ='<div class="col pageHeading nameHist"><h2 class="scorePrep">Name</h2></div><div class="col pageHeading scoreHist"><h2 class="scorePrep">Scores</h2></div><button type="button" class="btn btn-primary btn-lg" id="restart">Restart?</button><button type="button" class="btn btn-primary btn-lg" id="clear">Clear Scores</button>';

var displayScore;


innerC.innerHTML = intro;    //temp removal for page creations
var startBtn = document.querySelector("#startB");
var fixedT = document.querySelector("#fixedTime");


startBtn.addEventListener("click",function(){
    innerC.innerHTML = quiz; 
    
    document.querySelector("#pageHeading").innerHTML = "Quiz Time!";
    questionT = document.querySelector("#questionTitle");
    result = document.querySelector("#result");


    multiChoices.push(".choiceA");
    multiChoices.push(".choiceB");
    multiChoices.push(".choiceC");
    multiChoices.push(".choiceD"); 
    Questions = reorder(Questions);
    promptQuestion(counter);
    
    
    fixedT.style.visibility = "visible";
    setCountdown()
    

    document.querySelectorAll(".choice").forEach(function(iter){
        iter.addEventListener("click",function(){
            userChoice = document.querySelector('.choice:checked').value;
            if (userChoice === Questions[counter-1].answer){
                
                timedDisplay = true;
                result.innerText = "--Correct!--";
                           
            }
            else{
                score = score - 20;
                timedDisplay = true;
                result.innerText = "--Wrong!--";
                          
            }
            iter.checked = false;  // unchecks the check mark
            if(counter < 5){
            promptQuestion(counter);
            }
            else{
                innerC.innerHTML = creditsA;
                displayScore = document.querySelector(".yourScore");
                finished = true;
                if(score <= 0){
                    score = 0;
                }
                displayScore.innerHTML = score;
                document.querySelector("#pageHeading").innerHTML = "Finished";

                var nameToSub = document.querySelector(".nameToSub");
                var submitBtn = document.querySelector(".submitBtn");


                submitBtn.addEventListener("click",function(){
                    if (nameToSub.value == false || nameToSub.value == NaN || nameToSub.value == undefined || nameToSub.value == null){
                        nameToSub.value = "NoName";
                    };

                    arrayPlayers.push(nameToSub.value);
                    arrayScores.push(score);
                    sortNums();
                    innerC.innerHTML = creditsB;
                    var restart = document.querySelector("#restart");
                    var clear = document.querySelector("#clear");
                    var i = 0;
                    while((i < arrayScores.length) && (i < 5 )){
                        updateScores(i);
                        i++
                    }
                    
                    clear.addEventListener("click",function(){
                        clearSt = true;
                    })


                    restart.addEventListener("click",function(){
                        localStorage.setItem("Players", JSON.stringify(arrayPlayers));
                        localStorage.setItem("Scores", JSON.stringify(arrayScores));
                        if(clearSt == true){
                            localStorage.clear();
                        }
                        location.reload();
                    })
                    

                });

            }
        });
    });
    
});

function updateScores(x){


    
    var a = ("<li>" + arrayPlayers[x] + "</li>").toString();
    var b = ("<li>" + arrayScores[x] + "</li>").toString();

    document.querySelector(".nameHist").innerHTML += a;
    document.querySelector(".scoreHist").innerHTML += b;
}



function promptQuestion(iNum){
    questionT.innerHTML = Questions[iNum].question;
    Questions[iNum].choices = reorder(Questions[iNum].choices);
    promptChoices(iNum);
    counter++;

};

function promptChoices(x){
    for (var i = 0;i < Questions[x].choices.length;i++){
        document.querySelectorAll(multiChoices[i])[0].value = Questions[x].choices[i];
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


function setCountdown() {
    var timerInterval = setInterval(function() {
        if(finished != true || timer != 0) {
        fixedT.innerHTML = ("Time remaining: " + timer);
        score = score - 2;
        timer--;
        }
    }, 1000);


    var quickUpdate = setInterval(function(){
        if(finished == true || timer <= 0) {
            clearInterval(timerInterval);
            clearInterval(quickUpdate);
            fixedT.style.visibility = "hidden";
            if(score <= 0){
                score = 0;
            }
            if (finished != true){
                score = 0;
                innerC.innerHTML = creditsA;
                displayScore = document.querySelector(".yourScore");
                displayScore.innerHTML = score;
                document.querySelector("#pageHeading").innerHTML = "Time ran out or Score was too low";
            }
        }
        if (timedDisplay == true){
            timedDisLength = 2;
            result.style.visibility = "visible";
            if (running == false){
                timedDisplay = false;
                running = true;
                var shortTimer = setInterval(function() {
                    timedDisLength--;
                    if (timedDisLength <= 0){
                        timedDisplay = false;
                        result.style.visibility = "hidden";
                        clearInterval(shortTimer);
                        running = false;
                        timedDisLength = 2;
                    } 
                
        
                }, 1000);
            }
        }
            
    },50);
  
    
  
    
  }



