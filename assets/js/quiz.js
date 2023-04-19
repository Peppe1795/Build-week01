
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

var successi = 3;
var totaleDomande = 10;
var insuccessi = totaleDomande - successi;
var successiPercentuale = (successi * 100) / totaleDomande;
var insuccessiPercentuale = (insuccessi / totaleDomande * 100);
var testo = document.querySelector('.testoCorrect');
var btnRateUs = document.getElementById('ultimoButton');
var indexC = document.getElementById("successi").innerText = ${successi}/${totaleDomande} questions;
var indexW = document.getElementById("insuccessi").innerHTML = ${insuccessi}/${totaleDomande} questions;


document.getElementById("successiPercentuale").innerHTML = "Correct" + "<br>" + successiPercentuale.toFixed(1) + "%" + "<br>";
document.getElementById("insuccessiPercentuale").innerHTML = "Wrong" + "<br>" + insuccessiPercentuale.toFixed(1) + "%";


const value = () => {
    let calcolo = document.querySelector('#dio').style.strokeDashoffset = 360 - (360 * successi)/10;
    if(successi >= 6){
        document.querySelector('testoCorrect').innerHTML = <p><span>Congratulation!</span></p><span style="color:#00ffffdf">You passed the exam.</span><p></p><p>We'll send you the certificate<br>in few minutes<br>Check your email (including <br>promotions / spam folder)</p>
    }else {
        document.querySelector('testoCorrect');
        testo.innerText = Stronzo hai sbagliato tutto;
    }
}
value()
const vaiArate = () => {
    btnRateUs.addEventListener('click', function () {
        window.open('../../feedback.html');
    });
}

vaiArate();