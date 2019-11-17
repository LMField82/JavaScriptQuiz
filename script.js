//Making a JS Quiz

//1. Landing page with start button
document.addEventListener("DOMContentLoaded", function() {
  //2. On click of start button, start button hides
  document.getElementById("startQuiz").addEventListener("click", function() {
    var disappearButton = document.getElementById("startQuiz");
    if (disappearButton.style.display === "block") {
      disappearButton.style.display = "none";
    }
    var disappearWelcome = document.getElementById("welcome");
    if (disappearWelcome.style.display === "block") {
      disappearWelcome.style.display = "none";
    }
//On click of start button, timer starts
    var count = 0;
    var timer = 90; 
    var counterDisplay = document.getElementById("counter");
    if (counterDisplay.style.display === "none") {
      counterDisplay.style.display = "block";
    }

    var countdown = setInterval(function() {
      timer--;
      document.getElementById("counter").innerHTML = timer + "s";

      if (timer === 0) {
        clearInterval(countdown);
      }
    }, 1000);

    var endQuiz = function() {
      clearInterval(countdown)
      console.log("QUIZ OVER")
      var highScore = localStorage.getItem("highScore");
      var addText = "";
      if (timer > highScore) {
        addText = "You got the highest score!";
        localStorage.setItem('highScore', timer)
      }
      document.getElementById("result").innerHTML = `Your final score is: ${timer}. ${addText}`;
      document.getElementById("highScore").style.display = "block";
      document.getElementById('score').addEventListener('click', function(e){
        e.preventDefault()
       var playerName = document.getElementById('typeName').value;
       localStorage.setItem(playerName, timer);
    });
    
};
    var correct = function() {
      document.getElementById("result").innerHTML = "correct";
      count++;
      if (count === questions.length) {
        endQuiz();
      } else {
        displayQuestions();
      }
    };
    var incorrect = function() {
      document.getElementById("result").innerHTML = "incorrect";
      count++;
      timer -= 10;
      if (count === questions.length) {
        endQuiz();
      } else {
        displayQuestions();
      }
    };

    var displayQuestions = function() {
      var node = document.createElement("h3");
      node.innerHTML = questions[count];
      document.getElementById("quiz").innerHTML = "";
      document.getElementById("answerChoiceBox").innerHTML = "";
      document.getElementById("quiz").appendChild(node);
      choiceArray[count].choices.map((choice, i) => {
        var ansButton = document.createElement("button");
        var text = document.createTextNode(choice);
        ansButton.setAttribute("data", choice);
        ansButton.setAttribute("answer", choiceArray[count].correct);
        ansButton.setAttribute("id", `btn${i}`);
        ansButton.appendChild(text);
        document.getElementById("answerChoiceBox").appendChild(ansButton);
        document
          .querySelector(`#btn${i}`)
          .addEventListener("click", function(event) {
            if (event.target.getAttribute("data") === choiceArray[count].correct) {
              correct();
            } else {
              incorrect();
            }
          });
      });
    };
    displayQuestions();

    //On click of start button, quiz starts
    // var showQuestion = document.getElementById("quiz");
    // if (showQuestion.style.display === "none") {
    //     showQuestion.style.display = "block";
    // }

    /*var test = document.getElementsByClassName("answerButtons");*/
    // document.getElementById("choiceA").style.display = "block";
    // document.getElementById("choiceB").style.display = "block";
    // document.getElementById("choiceC").style.display = "block";
    // document.getElementById("choiceD").style.display = "block";
  });

  //3. Quiz

  //question 1 appears (can be a p, h2, etc elements)

  //answers for Q1 appear as buttons

  //on click of answer, display correct/incorrect

  //if incorrect, timer subtracts 10seconds -- need a loop to cycle through questions in this same manner

  //on click of answer, question 2 appears, repeat above (loop) until last question.

  //for final question, on click of answer stop timer || if time = 0 (before final question)

  //do high score

  //4. High score

  //get initials as an input and tie to score(timer) --- score = amount of time left after answering all question/ score = 0 if timer runs out

  //need enter button for submitting initials with score

  //save to local storage

  //go to high score page (link)

  //pull data from local storage to display on HS page
});

//1. create a call to action
// var choiceA = document.getElementById("A");
// var choiceB = document.getElementById("B");
// var choiceC = document.getElementById("C");
// var choiceD = document.getElementById("D");
// var question = document.getElementById("question");

//     //need a landing page and a start quiz button
//     //add listener to start quiz button
//     start.addEventListener("click", startQuiz);

//when start quiz button is clicked hide button - captain planet ex

//add  submit and Back button

//****Questions start here****/

//2. Countdown timer
//must start at 0.
//on click of start quiz button, countdown timer starts at 75seconds and counts down to 0.
//timer stops at 0 or when the questions are finished.
//wrong answer subtracts 10 seconds from remaining time.

//3. Questions - place js question file before other js file
//Question 1 appears on start quiz button click
//flash correct or wrong on the submit button click
//new question appears after answer is displayed correct or wrong (maybe 500ms after submit click??)
//if else to show wrong/right after click submit button
//stores answer as correct or wrong
//quiz ends on submit button click of last question.
//display score page after submit buttom is clicked - have a finish button

//4. High Scores stored in browser (can be separate html file)
//prompt user for initials after score page on finish button click
//text input box for initials
//button to submit initials with score
//display (new) page with high scores on submit button click
//have button to clear high scores on this page
//have button to restart quiz on this page too
