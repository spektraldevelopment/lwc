import { LightningElement, api, track, wire } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultController.getCars';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class carSearchResult extends LightningElement {
    @api carTypeId;

    @track cars;
    @track carSelectedId;

    @wire(getCars, { carTypeId: '$carTypeId' })
    wiredCars({ data, error }) {
        if(data) {
            this.cars = data;

            console.log(this.cars);
        } else if (error) {
            this.showToast('ERROR', error.body.message, 'error');
        } 
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(evt);
    }

    carSelectHandler(evt) {
        const carId = evt.detail;

        this.carSelectedId = carId;
    }

    get carsFound() {
        if (this.cars) {
            return true;
        }
        return false;
    }
}