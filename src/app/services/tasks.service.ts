import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export class TasksService {

private tasksList: Array<Task> = [];
private tasksDone: Array<Task> = [];

private tasksListObs = new BehaviorSubject<Array<Task>>([]);
private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);


  constructor() {
    console.log('TaskService');
    this.tasksList = [
      {name: 'Cooking', created: new Date()},
      {name: 'Learning Angular', created: new Date()},
      {name: 'Cleaning', created: new Date()},
      {name: 'Jogging', created: new Date()},
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }


  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }



  done(task: Task) {

    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
