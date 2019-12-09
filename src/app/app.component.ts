import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputText = 'Text';
  maxLengt = 5;
  colorClass = 'color';
  logoUrl = '';

  isDisable = true;

  constructor() {
  }

  onFocus() {
    this.colorClass = 'color2';
  }
  onClick($event) {
    console.log(event);
  }
  onMouseMove($event) {
    //console.log('x: ' + event.clientX = ', y: ' + event.clientY);
  }
  onPaste() {
    this.inputText = 'dont paste, just write!';
  }
  change() {
    this.isDisable = false;
  }


}
