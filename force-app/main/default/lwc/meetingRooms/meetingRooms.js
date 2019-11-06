import {
    LightningElement,
    track
} from 'lwc';

export default class MeetingRooms extends LightningElement {

    @track selectedMeetingRoom;

    meetingRoomsInfo = [{
            roomName: 'A-01',
            roomCapacity: '12'
        },
        {
            roomName: 'A-02',
            roomCapacity: '4'
        },
        {
            roomName: 'A-03',
            roomCapacity: '12'
        },
        {
            roomName: 'A-04',
            roomCapacity: '12'
        },
        {
            roomName: 'B-05',
            roomCapacity: '8'
        },
        {
            roomName: 'B-06',
            roomCapacity: '12'
        },
        {
            roomName: 'B-07',
            roomCapacity: '16'
        }
    ];

    onTileSelectHandler(evt) {
        const meetingRoomInfo = evt.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }

    constructor() {
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
}