import { LightningElement } from 'lwc';

export default class LifeCycleDemo extends LightningElement {

    constructor() {
        super();
        console.log('Constructor Called');
    }

    connectedCallback() {
        console.log('Component Connected Callback');
    }

    renderedCallback() {
        console.log('Rendered Callback');
    }

    disconnectedCallback() {
        console.log('Disconnected Callback');
    }
}