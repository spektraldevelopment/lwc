import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Toronto', 'Hamilton', 'Kingston'];

    showDivHandler(evt) {
        this.displayDiv = evt.target.checked;
    }
}