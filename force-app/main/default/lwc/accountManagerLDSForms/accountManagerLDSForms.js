import { LightningElement, track } from 'lwc';

export default class accountManagerLDSForms extends LightningElement {

    @track recordId;

    successHandler(evt) {
        this.recordId = evt.detail.id;
    }
}