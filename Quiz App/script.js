const questions = [
    {
        question: "What is RAM?",
        options: ["Read Only Memory", "Random Access Memory", "Rest Access Memory"],
        answer: "Random Access Memory"
    },
    {
        question: "What is ROM?",
        options: ["Read Only Memory", "Random Access Memory", "Rest Access Memory"],
        answer: "Read Only Memory"
    },
    {
        question: "What is a Capacitor?",
        options: ["Device for storing electrical charge", "Device for coding", "Device for repair"],
        answer: "Device for storing electrical charge"
    },
    {
        question: "What is a Variable?",
        options: ["A number", "A container for storing data", "A built-in house"],
        answer: "A container for storing data"
    }
]

let currentIndex = 0;
let score = 0;
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

function showQuestion(){
    if(currentIndex === questions.length){
        let remark = "";
        if(score === questions.length){
            remark = "Excellent!";
        } else if(score >= questions.length / 2){
            remark = "Good job!";
        } else {
            remark = "Keep practicing!";
        }
        quiz.innerHTML = "";
        result.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your score: ${score}/${questions.length}</p>
            <p>${remark}</p>
        `;
        return;
    }
    const current = questions[currentIndex];
    quiz.innerHTML = `<h1>${current.question}</h1>`;
    current.options.forEach((option, index) => {
        quiz.innerHTML += `
            <button onclick="checkAnswer(${index})">${option}</button>
        `
    })
}

function checkAnswer(index){
    const current = questions[currentIndex];
    const selected = current.options[index];
    if(selected === current.answer){
        score++;
        document.body.style.background = "green";
    } else {
        document.body.style.background = "red";
    }
    setTimeout(() => {
        document.body.style.background = "white";
        currentIndex++;
        showQuestion();
    }, 1000)
}

showQuestion();