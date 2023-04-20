
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

window.addEventListener('load', function () {
  countDown;
  
})

/*timer*/
const timeS = document.querySelector('aside');
let timeSeconds = 30;
var barra = document.querySelector('circle');
timeS.innerHTML = ` ${timeSeconds}`;
let countDown = setInterval(() => {
  secondi = document.querySelector('#ss').style.strokeDashoffset = - 420 - (440 * timeSeconds) / 30;
  timeSeconds--;
  timeS.innerHTML = `${timeSeconds} `;
  if (timeSeconds <= 0 || timeSeconds < 1) {
    clearInterval(countDown);
  }

}, 1000);
/*--------------------------------*/

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
var nextBtn = document.getElementById('nextItems')
var questionEl = document.getElementById('question')


let index = 0;


const ArrayDom = [];
const answerA = [];
function arrayDomande() {
  for (i = 0; i < questions.length; i++) {
    index = Math.floor(Math.random() * questions.length)
    if (!ArrayDom.includes(index)) {
      ArrayDom.push(index);
    } else {
     i++;
    }
  }
}
arrayDomande();

answerA.push(questions[index].correct_answer)
for (k = 0; k < questions[index].incorrect_answers.length; k++) {
  answerA.push(questions[index].incorrect_answers[k]);
}
answerA.sort();
console.log(answerA);

loadQuiz();
function loadQuiz() {
  const currentQuizData = questions[index];
  questionEl.innerText = currentQuizData.question;

  a_text.innerHTML = answerA[0];
  b_text.innerHTML = answerA[1];
  c_text.innerHTML = answerA[2];
  d_text.innerHTML = answerA[3];
}

nextBtn.addEvenListener("click", () => {
   index++;
});

function scambio (){
  if (countDown() <= 0){
    index++;
  } 
}

/*if (questions[index].incorrect_answers.length == 2) {
  elementC.style.display = 'none';
  elementD.style.display = 'none';
} else {
  elementC.style.display = 'inline-block';
  elementD.style.display = 'inline-block';
}

function scelta() {
  bottoni.forEach((element) => {
    if (timeSeconds > 1) {
      element.addEventListener('click', confrontoA());
    } else if (timeSeconds == 0) {
      domandaSuccessiva();
    }
  })
}

scelta();

function confrontoA() {
  if (elementA.textContent == questions[index].correct_answer) {
    successi++
  } else {
    questions[index]++
  }
};

function domandaSuccessiva() {

}
//localStorage.setItem(successi); // per passare il risultato alla pagina 3

/*if (index > questions.length){
    window.open("../../result.html")
}*/
