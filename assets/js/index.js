var btnVerifica = document.getElementById('bottone1');
var checkB = document.getElementById('check1');

window.addEventListener('load', function () {
    btnVerifica.disabled = true;
    checkB.checked = false;
});

const verifica = () => {
    checkB.addEventListener('click', function () {
        if (checkB.checked) {
            btnVerifica.disabled = false;
        }
    });
}
verifica();
 
btnVerifica.addEventListener('click', function() {
if (btnVerifica.disabled = false) {
    btnVerifica.gotoLink('../../quiz.html')
}
 });