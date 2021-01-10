
/////////////////////////////////////////////////////////////
//GLOBAL VARIABLES
/////////////////////////////////////////////////////////////

// DOM Nodes


let countDownEl = document.querySelector("#countdown");
let questionContainerEl = document.querySelector(".question-container");
let questionSpanEl = document.querySelector("#question-span");
let scoreEl = document.querySelector("#count");
let startEl = document.querySelector("#start");

//ANSWER AREA = PLACE TO PUT WHETHER CORRECT OR NOT CORRECT
let answerArea = document.querySelector("#answer-placeholder");

//END GAME AREA = DIV ID TO PUSH THE END RESULTS AND DISPLAY THE FORM FOR INITIALS
let endGameArea = document.querySelector("#endgame-placeholder");

let score = 0;
let timeLeft = 60;
let currentQuestionindex = 0;

//Create an array with five question objects
let questions = [
    { q: "HTML (Hypertext Markup Language)  is the code that is used to structure?", a: "web page content", b: "css", c: "javascript", d: "terminal"},
    { q: "Which one is not a CSS property?", a: "color", b: "font-style", c: "text-align", d: "pizza" },
    { q: "Which language makes the web page interactive?", a: "html", b: "css", c: "javascript", d: "google"  },
    { q: "Which one is not a data type?", a: "inter", b: "string", c:"boolean", d: "color" },
    { q: "Does coding rock?", a: "true", b: "false" }
    
]

// run timer function
function countDown() {
    // check if time left is greater that 0
    // if it is, decrement timeLeft
    // and update countDownEl with new time
    timeLeft--;
    countDownEl.textContent = timeLeft
}

function endGame(score) {
   


    // FUNCTION TO CALL WHEN THE GAME HAS ENDED 
    // EITHER RAN OUT OF TIME OR ALL QUESTIONS ANSWERED

    // UNHIDE THE FORM, TAKE IT FROM DISPLAY NONE, TO DISPLAY BLOCK
    questionContainerEl.textContent = "Thank you for playing the Game, your score was " + score;

    // MAKE THE END AREA TEXT APPEAR 
    endGameArea.style.display = "block";

}

function printQuestion(questionObj) {

    // PRINT THE QUESTION
    questionSpanEl.textContent = "";
    questionSpanEl.textContent = questionObj.q;

    // PRINT THE ANSWER CHOIES, THIS RESETS THEM TO BLANK PRIOR TO DISPLAYING THEM
    questionContainerEl.textContent = '';

    // LOOP THROUGH ALL THE ANSWERS TO DISPLAY TO THE USER
    for (answer in questionObj) {
        
        if (answer !== 'q') {
           
            // CREATE A BUTTON FOR EVERY ANSWER 
            let answerBtn = document.createElement('button');
            answerBtn.setAttribute('id', 'answer-id');
            answerBtn.setAttribute('class', 'btn'); 
            answerBtn.textContent = questionObj[answer];

            // WHEN THE USER SELECTS AN ANSWER, CALL THIS FUNCTION TO VALIDATE IF ANSWER IS CORRECT
            answerBtn.onclick = function() {
             
                    // ANSWER KEY IS HERE
                    if (   
                            answerBtn.textContent === "web page content" || 
                            answerBtn.textContent === "pizza" || 
                            answerBtn.textContent === "javascript" || 
                            answerBtn.textContent === "color" || 
                            answerBtn.textContent === "true" 
                    ) {
                      
                        // INCREMENT THE SCORE BECAUSE THE ANSWER IS CORRECT
                        score++;

                        // MOVE TO THE NEXT QUESTION 
                        currentQuestionindex++;

                        // CHANGE THE TEXT TO SAY CORRECT
                        answerArea.textContent = "CORRECT, Good Job!";

                        // AFTER 2 SECONDS MOVE ON TO THE NEXT QUESTION AND IF ITS THE LAST QUESTION THEN 
                        // CALL THE END GAME FUNCTION 
                        setTimeout(function(){ 
                            answerArea.textContent = "";
                            
                            if(currentQuestionindex === 5){
                                endGame(score);
                            } else {
                                printQuestion(questions[currentQuestionindex]);
                            }

                        }, 2000);

                    } else {

                        currentQuestionindex++;
                        answerArea.textContent = "WRONG, Sorry bud!";
                        setTimeout(function(){ 
                            answerArea.textContent = "";
                              
                            if(currentQuestionindex === 5){
                                endGame(score);
                            } else {
                                printQuestion(questions[currentQuestionindex]);
                            }

                        }, 2000);

                    }

            };
            questionContainerEl.appendChild(answerBtn);
            
        }
    }
}

function getHighScores() {

    // TO DO 
    // WHEN THE FORM HANDLER STARTS WORKING 
    // INSERT THE INITIALS AND SCORE TO LOCAL STORAGE
    // WHEN LOCAL STORAGE WORKS SUCCESFULLY THIS FUNCTION WILL ALSO DISPLAY THE HIGH SCORE
    
    var initials = localStorage.getItem('initials');
    var score = localStorage.getItem('score'); 

    var highscoreFormHandler = function(event) {
    var highscoreInitialsInput = document.querySelector("input[name='high-score-initials']").value;
    var highscoreInput = score;


    // check if inputs are empty (validate)
    if (!highscoreInitialsInput) {
        alert("You need to fill out the high score initials in the form!");
        return false;
    }
    }

}

startEl.addEventListener('click', function() {
    let countDownTimerID = setInterval(function() {
        if (timeLeft > 0) {
            countDown();
        } else {
            alert('End Game');
            clearInterval(countDownTimerID);
        }
    }, 1000);

    printQuestion(questions[currentQuestionindex]);
});