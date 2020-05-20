let currentValue = 0;
const calcDisplay  = document.getElementById('calcDisplay');
const calcButtons = document.querySelector('.calculator-nums');

calcButtons.addEventListener('click', function(e) {
    let buttonVal = e.target.innerHTML;
    if (e.target.innerHTML === 'C') {
        clearDisplay();
    } else {
        updateDisplay(buttonVal);
    }
});

function clearDisplay() {
    calcDisplay.innerHTML = 0;
}
function updateDisplay(val) {
    calcDisplay.innerHTML = calcDisplay.innerHTML + val;
}
