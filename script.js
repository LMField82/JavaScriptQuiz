//Making a JS Quiz

//1. Landing page with start button
document.addEventListener("DOMContentLoaded", function() {
  //2. On click of start button, start button hides
  document.getElementById("startQuiz").addEventListener("click", function() {
    var disappearButton = document.getElementById("startQuiz");
      disappearButton.style.display = "none";

    var disappearWelcome = document.getElementById("welcome");
    if (disappearWelcome.style.display === "block") {
      disappearWelcome.style.display = "none";
    }
//On click of start button, timer starts
    var count = 0;
    var timer = 90; 
    var counterDisplay = document.getElementById("counter");
    if (counterDisplay.style.visibility === "hidden") {
      counterDisplay.style.visibility = "visible";
    }

    var countdown = setInterval(function() {
      timer--;
      document.getElementById("counter").innerHTML = timer + "s";
    if (timer === 0) {
        clearInterval(countdown);
        endQuiz();
      }else if (timer < 0) {
          clearInterval(countdown);
          endQuiz();
          document.getElementById("result").innerHTML = "Your final score is 0";
      }

      
    }, 1000);


//to end the quiz
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
       var quizTaker = document.getElementById('typeName').value;
       localStorage.setItem(quizTaker, timer);
    });
    
}; //put something to show correct answer
    var correct = function() {
      document.getElementById("result").innerHTML = "The last question was correct";
      count++;
      
      if (count === questions.length) {
        endQuiz();
      } else {
        displayQuestions();
      }
    };//put something to show incorrect answer
    var incorrect = function() {
      document.getElementById("result").innerHTML = "The last question was incorrect";
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

        // var allHighScores = JSON.parse(localStorage.getItem("typeName"));
        // console.log("allHighScoes.value", allHighScores);
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

