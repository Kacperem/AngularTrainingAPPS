import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;


  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({ taskName: new FormArray([new FormControl(null, Validators.required)]) });
  }

  add() {
    const tasksList = this.createTaskList();
    this.tasksService.add(tasksList);
    this.addForm = this.initForm();
  }

  createTaskList(): Array<Task> {
    const tasksList = new Array<Task>();
    const tasksArr = this.addForm.get('taskName').value as [string];
    tasksArr.forEach(taskName => {
      const task = { name: taskName, created: new Date() };
      tasksList.push(task);
    });
    return tasksList;
  }

  addField() {
    const arr = this.addForm.get('taskName') as FormArray;
    arr.push(new FormControl(null));
  }
}
