const quizForm = document.querySelector(".quiz-Form");
const questions = document.querySelectorAll(".questions");
const finalScore = document.querySelector(".final-Score");
const submitQuiz = document.querySelector(".submitQuiz");

const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3"];
let score= 0;

quizForm.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
       if(entry[1] == correctAns[index]){
        questions[index].style.borderColor = "green";
        score++;
       }
       else{
        questions[index].style.borderColor = "red";
       }
        index++;
    }
    finalScore.innerText = score + "/10";
    submitQuiz.style.display= "none";
});