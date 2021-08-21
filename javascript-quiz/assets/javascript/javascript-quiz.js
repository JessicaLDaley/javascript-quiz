var startButton = document.getElementById("start-game")
var timeInMinutes = 1;
var currentTime = Date.parse(new Date());
var waitingOnAnswer = true;
var deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
var question = [{}];
var questionIndex = 0;
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
var days ;
var hours ;
var minutes ;
var seconds ;
  // Find the distance between now and the count down date
  var distance;
  var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
function updateTime() {

  // Get today's date and time
  var now = new Date().getTime();
  
  // Time calculations for days, hours, minutes and seconds

  distance = countDownDate - now;
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}


function checkAnswer() {
  // Determine if the correct button was clicked
  var answer;
  if(this.id === "answer-btn1") answer = question[questionIndex].choice1;
  else if(this.id === "answer-btn2") answer = question[questionIndex].choice2;
  else if(this.id === "answer-btn3") answer = question[questionIndex].choice3;
  else if(this.id === "answer-btn4") answer = question[questionIndex].choice4;


if (question[questionIndex].answer === answer) {console.log("that is correct!");
}else{

} 
// decrement counter on wrong answer clicks
  console.log("you picked answer number "+this.id)
  questionIndex++;
  updateQuestion(questionIndex);
 


}


function updateQuestion (element){
  // IF QuestionIndex !== 0 then delete buttons
  // Grab all current buttons by their ID
  // Remove each button
  if(questionIndex !== 0) {
    const answerButtons = document.getElementsByClassName("answer-btn")

    for (var i = 0; i < 4; i++) {
      answerButtons[0].remove()
    }
  }else{ 
    setInterval(function(){updateTime()},1000);
  }



  // buttons 
  var choiceOneBtn =document.createElement("button");
  choiceOneBtn.setAttribute("id","answer-btn1")
  choiceOneBtn.setAttribute("class","answer-btn")
  console.log(question[element].choice1)
  choiceOneBtn.innerHTML = question[element].choice1;
  document.body.appendChild(choiceOneBtn);
  
  var choiceTwoBtn =document.createElement("button");
  choiceTwoBtn.setAttribute("id","answer-btn2")
  choiceTwoBtn.setAttribute("class","answer-btn")
  console.log(question[element].choice2)
  choiceTwoBtn.innerHTML = question[element].choice2;
  document.body.appendChild(choiceTwoBtn);
  
  var choiceThreeBtn =document.createElement("button");
  choiceThreeBtn.setAttribute("id","answer-btn3")
  choiceThreeBtn.setAttribute("class","answer-btn")
  console.log(question[element].choice3)
  choiceThreeBtn.innerHTML = question[element].choice3;
  document.body.appendChild(choiceThreeBtn);
 
  var choiceFourBtn =document.createElement("button");
  choiceFourBtn.setAttribute("id","answer-btn4")
  choiceFourBtn.setAttribute("class","answer-btn")
  console.log(question[element].choice4)
  choiceFourBtn.innerHTML = question[element].choice4;
  document.body.appendChild(choiceFourBtn);
  
  // UPDATE DOCUMENT INNER HTML WITH QUESTION TEXT
  
 
  


  // add function that keeps score when correct answer is clicked?
  document.getElementById ("answer-btn1").addEventListener("click",checkAnswer,false);
  document.getElementById ("answer-btn2").addEventListener("click",checkAnswer,false);
  document.getElementById ("answer-btn3").addEventListener("click",checkAnswer,false);
  document.getElementById ("answer-btn4").addEventListener("click",checkAnswer,false);

}

function set(endtime){
  var time = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (time/1000) % 60 );
  var minutes = Math.floor( (time/1000/60) % 60 );
  
  return {
    'total': time,
    'minutes': minutes,
    'seconds': seconds
  }
}


var start = document.getElementById("start-button").addEventListener("click",hideshow,false);

function hideshow(){
  document.getElementById("hidden-div").style.display = "block";
  this.style.display = "none"
}



document.querySelector('#start-button').onclick = function(){
    updateQuestion(questionIndex);
};





function startGame(){
  currentTime = Date.parse(new Date());
  deadline = new Date(currentTime + timeInMinutes*60*1000);
  console.log(new Date, deadline);
  initializeClock('clockdiv', deadline);
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  updateQuestion(questionIndex);
}



function initializeClock(id, endtime){
  var clock = document.getElementById(id);
}

function updateClock(){
  var time = getTimeRemaining(endtime);
  clock.innerHTML = time.minutes + ':' + time.seconds;
  
  if(time.total<=0){
    clearInterval(timeinterval);
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

//change this yes or no question to have four options
var question = [
{
    "question":" What JavaScript syntax creates, or declares, a new variable?",
    "answer":"var",
    "choice1":"script",
    "choice2":"console",
    "choice3":"varb",
    "choice4":"var"

},
{
    "question":"What's the difference between ' == ' and ' === ' operators?",
    "answer":"'==' is used to compare values whereas, ' === ' is used to compare both value and types.",
    "choice1":"'==' compairs both value and types, whereas, === is used to compare.",
    "choice2":"'==' returns value twice, whereas, '===' returns value three times.",
    "choice3":"They do the exact same thing",
    "choice4":"'==' is used to compare values whereas, ' === ' is used to compare both value and types."
},
    
    {
    "question":"What symbol asigns a value to a variable?",
    "answer":"=",
    "choice1":"+",
    "choice2":"=",
    "choice3":"$",
    "choice4":";",
  } ]
  
   

  


    // for(i = 0; i < q.length; i++){
    //   confirm(questions[i].q)
    //   };














































