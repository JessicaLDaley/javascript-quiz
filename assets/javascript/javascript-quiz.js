var startButton = document.getElementById("start-game")
var timeInMinutes = 1;
var hideInstructions;
var waitingOnAnswer = true;
var deadline;
var question = [{}];
var questionIndex = 0;
var x = 0;
var days;
var hours;
var minutes;
var seconds;
var timeDock = 0;
var timer;
var score = 0;
var distance;
var question =

  [
    {
      "question": " What JavaScript syntax creates, or declares, a new variable?",
      "answer": "var",
      "choice1": "script",
      "choice2": "console",
      "choice3": "varb",
      "choice4": "var"
    },
    {
      "question": "What's the difference between ' == ' and ' === ' operators?",
      "answer": "'==' is used to compare values whereas, ' === ' is used to compare both value and types.",
      "choice1": "'==' compairs both value and types, whereas, === is used to compare.",
      "choice2": "'==' returns value twice, whereas, '===' returns value three times.",
      "choice3": "They do the exact same thing",
      "choice4": "'==' is used to compare values whereas, ' === ' is used to compare both value and types."
    },

    {
      "question": "What symbol asigns a value to a variable?",
      "answer": "=",
      "choice1": "+",
      "choice2": "=",
      "choice3": "$",
      "choice4": ";"
    },
    {
      "question": "How do you create a function in javascript?",
      "answer": "function myFunction()",
      "choice1": "function myFunction()",
      "choice2": "function = myFunction()",
      "choice3": "function:myFunction()",
      "choice4": "funcion == myFunction"
    },
    {
      "question": "How do you write an IF statement in javascript?",
      "answer": "if (1 == 5)",
      "choice1": "if i = 5",
      "choice2": "if i = 5 then",
      "choice3": "if (i == 5)",
      "choice4": "if i == 5 then"
    }
  ]


function updateTime() {

  // Get today's date and time
  var now = new Date().getTime();

  // Time calculations for days, hours, minutes and seconds

  distance = deadline - now - timeDock;
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = "Time:" + seconds;

  // trigger end of array to clearInterval

  if (distance < 0 || questionIndex >= question.length) {
    score = seconds;
    clearInterval(timer);
    //document.getElementById("form").style.visibility = "visible";
    document.getElementById("form").style.display = "block";
    //document.getElementById("timer").innerHTML = "";
    document.getElementById("initial-button").addEventListener("click", saveScore, false);
  }


}
function saveScore() {
  var initials = document.getElementById("initials").value;

  var HS = localStorage.getItem(initials);

  if (HS === null) {
    localStorage.setItem(initials, "0")
    HS = localStorage.getItem(initials)
  }
  if (score > parseInt(HS)) {
    localStorage.setItem(initials, JSON.stringify(score));
  }




}


function checkAnswer() {
  // Determine if the correct button was clicked
  var choice;
  if (this.id === "answer-btn1") choice = question[questionIndex].choice1;
  else if (this.id === "answer-btn2") choice = question[questionIndex].choice2;
  else if (this.id === "answer-btn3") choice = question[questionIndex].choice3;
  else if (this.id === "answer-btn4") choice = question[questionIndex].choice4;


  if (question[questionIndex].answer === choice) {
  } else {
    timeDock += 5000;
  }
  // decrement counter on wrong answer clicks
  questionIndex++;
  if (questionIndex < question.length) {
    updateQuestion(questionIndex);
  }



}


function updateQuestion(element) {
  // IF QuestionIndex !== 0 then delete buttons
  // Grab all current buttons by their ID
  // Remove each button



  if (questionIndex !== 0) {
    const answerButtons = document.getElementsByClassName("answer-btn")

    for (var i = 0; i < 4; i++) {
      answerButtons[0].remove()

    }
  } else {
    deadline = new Date(Date.parse(new Date()) + timeInMinutes * 60 * 1000);
    timer = setInterval(function () { updateTime() }, 1000);

  }

  if (questionIndex <= question.length) {
    document.getElementById("ask").innerHTML = question[element].question;
  }


  // buttons 
  var choiceOneBtn = document.createElement("button");
  choiceOneBtn.setAttribute("id", "answer-btn1")
  choiceOneBtn.setAttribute("class", "answer-btn")
  choiceOneBtn.innerHTML = question[element].choice1;
  document.body.appendChild(choiceOneBtn);

  var choiceTwoBtn = document.createElement("button");
  choiceTwoBtn.setAttribute("id", "answer-btn2")
  choiceTwoBtn.setAttribute("class", "answer-btn")
  choiceTwoBtn.innerHTML = question[element].choice2;
  document.body.appendChild(choiceTwoBtn);

  var choiceThreeBtn = document.createElement("button");
  choiceThreeBtn.setAttribute("id", "answer-btn3")
  choiceThreeBtn.setAttribute("class", "answer-btn")
  choiceThreeBtn.innerHTML = question[element].choice3;
  document.body.appendChild(choiceThreeBtn);

  var choiceFourBtn = document.createElement("button");
  choiceFourBtn.setAttribute("id", "answer-btn4")
  choiceFourBtn.setAttribute("class", "answer-btn")
  choiceFourBtn.innerHTML = question[element].choice4;
  document.body.appendChild(choiceFourBtn);





  // add function that keeps score when correct answer is clicked?
  document.getElementById("answer-btn1").addEventListener("click", checkAnswer, false);
  document.getElementById("answer-btn2").addEventListener("click", checkAnswer, false);
  document.getElementById("answer-btn3").addEventListener("click", checkAnswer, false);
  document.getElementById("answer-btn4").addEventListener("click", checkAnswer, false);

}



var start = document.getElementById("start-button").addEventListener("click", hideshow, false);


function hideshow() {
  document.getElementById("hidden-div").style.display = "block";
  this.style.display = "none"

  document.getElementById("instructions").style.display = "none";
  document.getElementById("title").style.display = "none";
}






document.querySelector('#start-button').onclick = function () {
  updateQuestion(questionIndex);
};







































