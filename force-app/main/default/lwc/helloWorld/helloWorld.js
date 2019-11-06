import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

   @track dynamicGreeting = 'World!';

   greetingChangeHandler(evt) {
    this.dynamicGreeting = evt.target.value;
   }
}