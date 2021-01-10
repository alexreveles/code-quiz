
/////////////////////////////////////////////////////////////
//GLOBAL VARIABLES
/////////////////////////////////////////////////////////////

// DOM Nodes
let countDownEl = document.querySelector("#countdown");
let questionContainerEl = document.querySelector(".question-container");
let questionSpanEl = document.querySelector("#question-span");
let scoreEl = document.querySelector("#count");
let startEl = document.querySelector("#start");
// TODO: Create a variable to keep track of the score
let score = 0;
let timeLeft = 60;
let currentQuestionindex = 0;

//Create an array with five question objects
let questions = [
    { q: "HTML (Hypertext Markup Language) is the code that is used to structure?", a: "web page content", b: "css", c: "javascript", d: "terminal"},
    { q: "Which one is not a CSS property?", a: "color", b: "font-style", c: "text-align", d: "pizza" },
    { q: "Which language makes the web page interactive?", a: "html", b: "css", c: "javascript", d: "google"  },
    { q: "Which one is not a data type?", a: "inter", b: "string", c:"boolean", d: "color" },
    { q: "Does coding rock?", a: "true", b: "false" }
    
]
// Iterate over the questions array and display each question

// run timer function
function countDown() {
    // check if time left is greater that 0
    // if it is, decrement timeLeft
    // and update countDownEl with new time
    timeLeft--;
    countDownEl.textContent = timeLeft
}

function getNextQuestion() {
    console.log(questions[currentQuestionindex])
}

function printQuestion(questionObj) {
    questionSpanEl.textContent = questionObj.q;

    for (answer in questionObj) {
        if (answer !== 'q') {
            console.log(questionObj[answer]);
            let answerBtn = document.createElement('button');
            answerBtn.setAttribute('id', 'test-id');
            answerBtn.setAttribute('class', 'btn');
            answerBtn.textContent = questionObj[answer];
            answerBtn.onclick = function() {
                alert('Btn event fired');

                // TODO
                // check is answer is correct, modify score and time accordingly
                // increase currentQuestionIndex
                // call getNextQuestion
            };
            questionContainerEl.appendChild(answerBtn);
        }
    }
}

// print question & answers function

// Event Listeners

// event that fires when users clicks start.

startEl.addEventListener('click', function() {
    let countDownTimerID = setInterval(function() {
        if (timeLeft > 0) {
            countDown();
        } else {
            alert('End Game');
            clearInterval(countDownTimerID);
        }
    }, 1000);


    // get the questions
    // getNextQuestion();
    printQuestion(questions[currentQuestionindex]);
});