import { LightningElement, track, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';

const fieldArray = ["Account.Name", "Account.Phone", "Account.Website"];

export default class AccountManagerLDS extends LightningElement {

    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    @track recordId;

    //Put recordId in string with $ to make it a reactive property
    @wire(getRecord, { recordId: '$recordId', fields: fieldArray })
        accountRecord;

    accountNameChangeHandler(evt) {
        this.accountName = evt.target.value;
    }

    accountPhoneChangeHandler(evt) {
        this.accountPhone = evt.target.value;
    }

    accountWebsiteChangeHandler(evt) {
        this.accountWebsite = evt.target.value;
    }

    createAccount() {
        const fields = { 'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website' : this.accountWebsite };
        const recordInput = { apiName: 'Account', fields };

        createRecord(recordInput)
            .then(res => {
                console.log('Account has been created: ', res.id);
                this.recordId = res.id;
            })
            .catch(err => {
                console.error(err.body.message);        
            })
    }

    get retAccountName() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }

    get retAccountPhone() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retAccountWebsite() {
        if(this.accountRecord.data) {
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }
}