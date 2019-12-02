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

  mydog = new MyDog('Berna', 5);

  showMyDog() {
    return 'My Dog is' + this.mydog.name + 'and she is ' + this.mydog.age + ' years old';
  }


}

class MyDog {
  constructor(public name: string, public age: number) {

  }
}
