
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





const timeS = document.querySelector('aside');
let timeSeconds = 30;
var barra = document.querySelector('circle');
timeS.innerHTML =` ${timeSeconds}`;

let countDown = setInterval(() => {
    secondi = document.querySelector('#ss').style.strokeDashoffset = - 420  - (440 * timeSeconds) / 30;
    timeSeconds--;
    timeS.innerHTML = `${timeSeconds} `;
    if (timeSeconds <= 0 || timeSeconds < 1) {
        clearInterval(countDown);
    }

}, 1000);

var index =0;
var successi=0;

const arrayRandomDomande = []
const ArrayRandomRisposte = []
function arrayDomande() {
    for (i = 0; i < questions.length; i++) {
        var contatore = Math.floor(Math.random() * questions.length)
        if (!arrayRandomDomande.includes(contatore)) {
            arrayRandomDomande.push(contatore);
        } else {
            i = i - 1;
        }
    }
}
arrayDomande();

ArrayRandomRisposte.push(questions[index].correct_answer)
for (k = 0; k < questions[index].incorrect_answers.length; k++) {
    ArrayRandomRisposte.push(questions[index].incorrect_answers[k]);
}
ArrayRandomRisposte.sort();

function inserisciTesto() {
    document.getElementById('domanda').innerHTML = questions[index].question;
    document.getElementById('a').innerHTML = ArrayRandomRisposte[0];
    document.getElementById('b').innerHTML = ArrayRandomRisposte[1];
    document.getElementById('c').innerHTML = ArrayRandomRisposte[2];
    document.getElementById('d').innerHTML = ArrayRandomRisposte[3];
}

inserisciTesto()

if (questions[index].incorrect_answers.length == 2) {
    document.getElementById('c').style.display = 'none';
    document.getElementById('d').style.display = 'none';
} else {
    document.getElementById('c').style.display = 'inline-block';
    document.getElementById('d').style.display = 'inline-block';
}

var elementA = document.getElementById('a')
var elementB = document.getElementById('b')
var elementC = document.getElementById('c')
var elementD = document.getElementById('d')

function eventHandler (){
elementA.addEventListener("click", confrontoA());
elementB.addEventListener("click", confrontoB());
elementC.addEventListener("click", confrontoC());
elementD.addEventListener("click", confrontoD());
}

eventHandler();

function confrontoA() {
    if (elementA.textContent == questions[index].correct_answer) {
        successi++
    }
    index++
};

function confrontoB() {
    if (elementB.textContent == questions[index].correct_answer) {
        successi++
    }
    index++
}
function confrontoC() {
    if (elementC.textContent == questions[index].correct_answer) {
        successi++
    }
    index++
}
function confrontoD() {
    if (elementD.textContent == questions[index].correct_answer) {
        successi++;
    }
    index++;
}

//localStorage.setItem(successi); // per passare il risultato alla pagina 3

/*if (index > questions.length){
    window.open("../../result.html")
}*/