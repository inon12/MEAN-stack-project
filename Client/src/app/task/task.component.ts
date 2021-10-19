import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  taskStatus : String="Set Completed";
  @Input()
  task : Task = new Task()

  
  @Output()
  editTask : EventEmitter<Task> = new EventEmitter()
  ngOnInit(): void 
  {
    if(this.task.Completed)
    {
      this.taskStatus="Well Done";
    }
  }
  markCompleted()
  {
    this.task.Completed=true;
    this.editTask.emit(this.task)
    this.taskStatus="Well Done";
   
  }

}
