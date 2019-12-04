import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MyDays';

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

myDogs = new Array<MyDog>();

constructor(){
  this.myDogs.push(new MyDog('Berna', 5), new MyDog('Hugo', 8), new MyDog('Berni', 4));
}


}

class MyDog {
  constructor(public name: string, public age: number) {

  }
}
