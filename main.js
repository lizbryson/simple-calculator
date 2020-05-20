// Calculator Object & Methods
let calculator = {
    currentValue : 0,
    currentOperator : '',
    calcDisplay : document.getElementById('calcDisplay'),
    calcOps : document.getElementById('calcOps'),
    calcButtons : document.querySelector('.calculator-nums'),
    clear() {
        this.calcDisplay.innerHTML = 0;
    },
    undo() {
        const currentVal = this.calcDisplay.innerHTML;
        const newVal = currentVal.slice(0, currentVal.length - 1 );
        this.calcDisplay.innerHTML = newVal;
    },
    compute(val) {
        if (val === '+') {
            this.currentOperator = 'add'
        } else if ( val === '-' ) {
            this.currentOperator = 'subtract'
        } else if (val === 'X') {
            this.currentOperator = 'multiply'
        } else {
            this.currentOperator = 'divide'
        }
    },
    update(val) {
        this.calcDisplay.innerHTML = (this.calcDisplay.innerHTML === '0') ? val : (this.calcDisplay.innerHTML + val);
    }
}

// Event Listener for Number Buttons
calculator.calcButtons.addEventListener('click', function(e) {
    let buttonVal = e.target.innerHTML;
    // Prevent Accidential Drag/Drop
    if (buttonVal.length === 1) {  
        (e.target.innerHTML === 'C') ? calculator.clear() :  calculator.update(buttonVal);  // Determine action based on button label
    } else if (e.target.innerHTML == '&lt;-') {
        calculator.undo();
    }
});

// Event Listener for Operator Buttons
calculator.calcOps.addEventListener('click', function(e) {
    let buttonVal = e.target.innerHTML;
    if (buttonVal === '=') {
        // Store Result
        let result = 0; 
        // Turn strings into numbers
        const currentValueInt = parseInt(calculator.currentValue);
        const displayValueInt = parseInt(calculator.calcDisplay.innerHTML);
        // Execute math based on calculator's current operatotr
        if (calculator.currentOperator === 'add') {
            result = currentValueInt + displayValueInt;
        }
        else if (calculator.currentOperator === 'subtract') {
            result = currentValueInt - displayValueInt;
        }
        else if (calculator.currentOperator === 'multiply') {
            result = currentValueInt * displayValueInt;
        }
        else {
            result = currentValueInt / displayValueInt;
        }
        // Show Result
        calculator.currentValue = result;
        calculator.calcDisplay.innerHTML = result;

    }  else {
        calculator.compute(e.target.innerHTML);
    }
    if (calculator.calcDisplay.innerHTML !== '0' && buttonVal !== '=') {
        calculator.currentValue = calculator.calcDisplay.innerHTML;
        calculator.clear();
    }
});

const themeSelector = document.getElementById('toggleBtns');
const docBody = document.getElementById('siteBody'); 
themeSelector.addEventListener('click', function(e) {
    if (e.target.id === 'darkBtn') {
        docBody.classList.add('is-dark')
    } else {
        docBody.classList.remove('is-dark')
    }
})