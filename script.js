const calcScreen = document.querySelector('.calcScreen');
const buttons = document.querySelectorAll('button');
console.log(buttons)

let calculation = []
let accumulativeCalculation

function calculate(button) {
    const value = button.textContent
    if (value === "ON/C") {
        calculation = []
        calcScreen.textContent = '.'
    } else if (value === "=") {
        calcScreen.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        calcScreen.textContent = accumulativeCalculation
    }
    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))