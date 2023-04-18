var successi = 9;
var totaleDomande = 10;
var insuccessi = totaleDomande - successi;
var successiPercentuale = successi/totaleDomande * 100;
var insuccessiPercentuale = insuccessi/totaleDomande * 100;
var testo;


document.getElementById("successiPercentuale").innerHTML= successiPercentuale + "%";
document.getElementById("insuccessiPercentuale").innerHTML= insuccessiPercentuale + "%";
document.getElementById("successi").innerHTML= `${successi}/${totaleDomande} questions`;
document.getElementById("insuccessi").innerHTML= `${insuccessi}/${totaleDomande} questions`;

if (successiPercentuale >= 60){
    document.getElementById("centro1").innerHTML= "Congratulations!";
    document.getElementById("centro2").innerHTML= "You passed your exam.";
    document.getElementById("centro3").innerHTML= "We'll send you the certificate";
    document.getElementById("centro4").innerHTML=  "in few minutes.";
    document.getElementById("centro5").innerHTML= "Check your mail (including";
    document.getElementById("centro6").innerHTML= "promotions / spam folder)";
} else {
    document.getElementById("centro1").innerHTML= "Sorry!";
    document.getElementById("centro2").innerHTML= "You failed your exam.";
    document.getElementById("centro3").innerHTML= "We can't send you the certificate ";
    document.getElementById("centro4").innerHTML= "because you faild your test.";
    document.getElementById("centro5").innerHTML= " ";
    document.getElementById("centro6").innerHTML= " ";
}
const calcolo = document.getElementById('dio')
let media = document.querySelector('.cerchi');
const dashboard = function(){
    if (successiPercentuale >= 60){

    }
}