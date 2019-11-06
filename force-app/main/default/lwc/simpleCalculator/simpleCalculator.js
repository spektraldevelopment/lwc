import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResults = [];
    @track showPreviousResults = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(evt) {
        const inputBoxName = evt.target.name;

        if(inputBoxName === 'firstNumber') {
            this.firstNumber = evt.target.value;
        } else if (inputBoxName === 'secondNumber') {
            this.secondNumber = evt.target.value;
        }
    }

    addHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN + secondN}`;
        this.previousResults.push(this.currentResult);
    }

    subHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
        this.previousResults.push(this.currentResult);
    }

    multiplyHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} x ${secondN} is ${firstN * secondN}`;
        this.previousResults.push(this.currentResult);
    }

    divisionHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
        this.previousResults.push(this.currentResult);
    }

    showPreviousResultToggle(evt) {
        this.showPreviousResults = evt.target.checked;
    }
}