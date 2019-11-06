import { LightningElement, track } from 'lwc';
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHN_FIELD from "@salesforce/schema/Account.Phone";
import WEBSITE_FIELD from "@salesforce/schema/Account.Website";


export default class accountRecordForm extends LightningElement {

    @track recordId;

    fieldsArray = [NAME_FIELD, PHN_FIELD, WEBSITE_FIELD];

    handleSuccess(evt) {
        this.recordId = evt.detail.id;
    }
}