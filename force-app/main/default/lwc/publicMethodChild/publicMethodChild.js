import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['Ross'];

    options = [
        { label: 'Ross', value: 'Ross' },
        { label: 'Rachel', value: 'Rachel' },
    ];

    @api selectCheckbox(checkboxValue) {
        const selectedCheckbox = this.options.find(checkbox => {
            return checkboxValue === checkbox.value;
        });

        if (selectedCheckbox) {
            this.value = selectedCheckbox.value;
            return "succesfully Checked";
        } 

        return 'No checkbox found';
        
    }
}
