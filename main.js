// Calculator Object & Methods
let calculator = {
    currentValue : 0,
    calcDisplay : document.getElementById('calcDisplay'),
    calcButtons : document.querySelector('.calculator-nums'),
    clearDisplay() {
        calcDisplay.innerHTML = 0;
    },
    undoDisplay() {
        const currentVal = calcDisplay.innerHTML;
        const newVal = currentVal.slice(0, currentVal.length - 1 );
        calcDisplay.innerHTML = newVal;
    },
    updateDisplay(val) {
        calcDisplay.innerHTML = (calcDisplay.innerHTML === '0') ? val : (calcDisplay.innerHTML + val);
    }
}

// Event Listener for Number Buttons
calculator.calcButtons.addEventListener('click', function(e) {
    let buttonVal = e.target.innerHTML;
    // Prevent Accidential Drag/Drop
    if (buttonVal.length === 1) {
        if (e.target.innerHTML === 'C') {
            calculator.clearDisplay();
        } else if (e.target.innerHTML == '&lt;-') {
            calculator.undoDisplay();
        } else {
            calculator.updateDisplay(buttonVal);
        }
    }
});

// Event Listener for Operator Buttons


