import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Learning Angular';
  dog = new Dog('Berna');
  show = true;


  changeTitle(){
    this.title = 'Angular is awesome!';
  }

  changeDog(){
    //this.dog.name = 'Hugo';
    this.dog = new Dog('Kevin');
  }

  nothing(){

  }

  destroy(){
    this.show = !this.title;
  }
}

export class Dog {
  constructor(public name: string) {

  }

}
