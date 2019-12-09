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
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  change() {
    this.inputText = 'change text and color';
    this.maxLengt = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }
}
