import {
    LightningElement,
    track
} from 'lwc';

import { getBMI } from 'c/bmi';

export default class BmiCalculator extends LightningElement {

    //Private props can only be accessed by the same component

    //Private prop
    //is static and will not respond to change
    cardTitle = "BMI CALCULATOR";

    weight;
    height;

    //Private tracked prop
    //Is a decorator
    @track bmi;

    onWeightChange(evt) {
        this.weight = parseFloat(evt.target.value);
    }

    onHeightChange(evt) {
        this.height = parseFloat(evt.target.value);
    }

    calculateBMI() {

        this.bmi = getBMI(this.weight, this.height);

        // try {
        //     this.bmi = this.weight / (this.height * this.height);
        // } catch (err) {
        //     this.bmi = undefined;
        // }
    }

    //Private getter is a computed property
    get bmiValue() {
        if (this.bmi === undefined) {
            return '';
        }
        //should always return a value
        return `Your BMI is: ${this.bmi}`;
    }
}