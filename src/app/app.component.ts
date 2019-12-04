import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MyDays';

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

isVisible = true;
isHidden = false;

show() {
  this.isVisible = !this.isVisible;
}

hidden() {
  this.isHidden = !this.isHidden;
}


}


