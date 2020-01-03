// tslint:disable-next-line: max-line-length
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Dog } from '../app.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy
{


  @Input()
  inputText: string;
  @Input()
  inputDog: Dog;
  show = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - Working! - #1');
    console.log(changes);
  }

  ngOnInit(): void {
    this.inputDog.name = 'Next Name';
  }

  ngDoCheck(): void {
    console.log('ngDoCheck - Working - #3');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - Working - #4');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - Working - #5');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - Working - #6');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - Working - #7');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - Working - #8');
  }

  content() {
    this.show = !this.show;
  }

}
