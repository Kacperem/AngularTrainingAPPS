import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];


  constructor(private taskService: TasksService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<string>) =>  {
      this.tasksList = tasks;
    });
   }

  ngOnInit() {
  }

  remove(task: string) {
    this.taskService.remove(task);
  }



  done(task: string) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 4 ? 'red' : 'green';
  }

}
