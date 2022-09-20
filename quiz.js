const quizForm = document.querySelector ('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');
const correctAnswers =["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];

function calculateScore() {
let score = 0;
let index = 0;
const formResults = new FormData(quizForm);
for(let value of formResults.values()){
    if(value === correctAnswers[index]){
        score = score + 1;
    }
    index = index+1; 
}
outputEl.innerText = "Your score is: " + score;

}


submitAnswerBtn.addEventListener('click', calculateScore);