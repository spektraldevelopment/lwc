import { LightningElement, track } from 'lwc';

export default class carSearch extends LightningElement {

    @track carTypeId = '';

    carTypeSelectHandler(evt) {
        this.carTypeId = evt.detail;
    }
}