//Making a JS Quiz

//1. Landing page with start button

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
    var counterDisplay = document.getElementsById("counter");
    if (counterDisplay.style.display === "none") {
        counterDisplay.style.display = "block";
    }
    var timer = 90000;
    var countdown = setInterval(function () {
        timer--;
        console.log("Timer: " + timer);
    }, 1000); 
    //On click of start button, quiz starts
    document.getElementById("quiz").
    document.getElementsByClassName("answerButtons").style.display = "block";

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
