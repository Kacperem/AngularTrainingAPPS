import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;


  constructor(private tasksTaskservice: TasksService) {
   }

  ngOnInit() {
    this.addForm = new FormGroup({
      taskName: new FormArray([new FormControl(null)])
    });
  }

  add() {
    const task: Task = ({name: '', created: new Date()});
    this.tasksTaskservice.add(task);
    //this.newTask = '';
  }

}
