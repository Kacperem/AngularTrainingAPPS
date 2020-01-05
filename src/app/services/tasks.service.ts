import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {

  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);


  constructor() {
    this.tasksList = ['Cooking', 'Learning Angular', 'Cleaning', 'Jogging'];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: string) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }


  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }



  done(task: string) {

    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }
}
