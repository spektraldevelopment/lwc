import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class carTile extends LightningElement {
    @api car;
    @api carSelectedId;

    @wire(CurrentPageReference) pageRef;

    handleCarSelect(evt) {
        evt.preventDefault();

        const carId = this.car.Id;

        const carSelect = new CustomEvent('carselect', { detail: carId });
        this.dispatchEvent(carSelect);

        fireEvent(this.pageRef, 'carselect', this.car);
    }

    get isCarSelected() {
        if(this.car.Id === this.carSelectedId) {

            return 'tile selected';
        }
        return 'tile';
    }
}