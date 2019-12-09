import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputText = 'Text';
  inputText2Way = '';
  button = true;
  showClick = '';

  click(event) {
    this.showClick = 'button active!';
    this.button = false;
  }
}


