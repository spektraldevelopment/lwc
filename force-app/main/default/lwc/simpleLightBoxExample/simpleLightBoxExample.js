import {
    LightningElement
} from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import {
    loadStyle,
    loadScript
} from 'lightning/platformResourceLoader';


export default class SimpleLightBoxExample extends LightningElement {

    slLoaded = false;

    renderedCallback() {
        console.log('SL is: ', SL);
        if (!this.slLoaded) {
            Promise.all([
                loadStyle(this, SL + '/simpleLightbox/dist/simpleLightbox.css'),
                loadScript(this, SL + '/simpleLightbox/dist/simpleLightbox.js')
            ]).then(() => {
                this.slLoaded = true;
                console.log('LOADED');
            }).catch((error) => {
                console.error('Could not initilize simple light box-', error);
            });
        }
    }

    openGallery() {
        SimpleLightbox.open({
            items: ['/resource/cars/van/maruti_suzuki_eeco.jpg', '/resource/cars/luxury/mercedes_benz_gls.jpg', '/resource/cars/sports/Audi_R8_V10_Plus.jpg']
        });
    }

}