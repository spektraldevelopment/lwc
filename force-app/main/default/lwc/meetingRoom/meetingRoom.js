import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
   
    //Public property
    //Values of these properties can be supplied by parent component
    @api meetingRoomInfo;

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;

    tileClickHandler() {
        const tileClicked = new CustomEvent('tileclick', { detail: this.meetingRoomInfo, bubbles: true });
        this.dispatchEvent(tileClicked);

        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }


}