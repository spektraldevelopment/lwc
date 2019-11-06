import {
    LightningElement,
    track,
    wire
} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class accountManagerApex extends LightningElement {

    // @wire(getAllAccounts)
    // accounts;

    @track numOfRecords;

    @track accounts;

    get responseReceived() {
        if (this.accounts) {
            return true;
        }
        return false;
    }

    numberOfAccountChangeHandler(evt) {
        this.numOfRecords = evt.target.value;
    }

    getAccounts() {
        getAllAccounts({
                numberOfRecords: this.numOfRecords
            })
            .then((res) => {
                this.accounts = res;

                const toastEvent = new ShowToastEvent({
                    title: 'Accounts Loaded',
                    message: this.numOfRecords + ' Accounts Fetched From Server',
                    variant: 'success'
                });

                this.dispatchEvent(toastEvent);
            })
            .catch((err) => {
                console.error('Error in getting the accounts: ', err.body.message);

                const toastEvent = new ShowToastEvent({
                    title: 'ERROR',
                    message: err.body.message,
                    variant: 'error'
                });

                this.dispatchEvent(toastEvent);
            })
    }
}