var successi = localStorage.getItem("successi");;
var totaleDomande = 10;
var insuccessi = totaleDomande - successi;
var successiPercentuale = (successi * 100) / totaleDomande;
var insuccessiPercentuale = (insuccessi* 100) / totaleDomande;
var testo = document.querySelector('.testoCorrect');
var btnRateUs = document.querySelector('.ultimoButton');
var indexC = document.getElementById("successi").innerText = `${successi}/${totaleDomande} questions`;
var indexW = document.getElementById("insuccessi").innerHTML = `${insuccessi}/${totaleDomande} questions`;


document.getElementById("successiPercentuale").innerHTML = `Correct<br><span id='percentualeS'>${successiPercentuale.toFixed(1)}%</span>`;
document.getElementById("insuccessiPercentuale").innerHTML = `Wrong  <br> <span> ${insuccessiPercentuale.toFixed(1)}%</span>`;


const value = () => {
    let calcolo = document.querySelector('#circleBar').style.strokeDashoffset = 360 - (360 * successi)/10;
    if(successi >= 6){
        testo.innerHTML = `<p><span><b>Congratulation!</b></span><br><span style="color:#00ffffdf">You passed the exam.</span></p>
        <p>We'll send you the certificate<br>in few minutes<br>Check your email (including
            <br>promotions / spam folder)
        </p>`;
    }else{
        testo.innerHTML = `<p><span>Sorry!</span></p><span style="color:red ;">You failed your exam.</span><p></p><p>We can't send you the certificate<br>because you failed your test.<br></p>`;
    }
}
value();
value()
const vaiArate = () => {
    btnRateUs.addEventListener('click', function () {
       location.href = ('../../feedback.html');
    });
}

vaiArate();
