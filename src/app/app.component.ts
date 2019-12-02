import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTest';
  pi = Math.PI;
  date = new Date();

  mydog: MyDog;




}

class MyDog {
  constructor(public name: string, public age: number) {

  }
}
