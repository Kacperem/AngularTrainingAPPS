import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];


  constructor(private taskService: TasksService) {
    console.log('TodoTaskComponent');
    this.taskService.getTasksListObs().subscribe((tasks: Array<Task>) =>  {
      this.tasksList = tasks;
    });
   }

  ngOnInit() {
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }



  done(task: Task) {
    task.end = new Date();
    this.taskService.done(task);
  }

  getColor(task: Task) {
    return this.tasksList.length >= 4 ? 'red' : 'green';
  }

}
