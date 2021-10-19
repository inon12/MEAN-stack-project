import { Component, OnInit } from '@angular/core';
 import { Input  } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { Post, User } from '../user';
import { UserUtilsService } from '../user-utils.service';
@Component({
  selector: 'app-tasks-and-posts',
  templateUrl: './tasks-and-posts.component.html',
  styleUrls: ['./tasks-and-posts.component.css']
})
export class TasksAndPostsComponent implements OnInit {

  title : String = "";
  body : String = "";
  taskTitle : String ="";

  addNewPost : Boolean =false;
  addNewTask  : Boolean =false;

  sub : Subscription;
  sub2 : Subscription;

@Input()
user : User = new User();
  constructor(private utils : UserUtilsService) { }

  ngOnInit(): void {
  }
  addPost()
  {
    this.user.Posts?.push(new Post(this.title,this.body));
    this.sub=this.utils.updateUser(this.user._id!,this.user).subscribe();
    this.addNewPost=false;
    this.restAddPostForm();
  }
  addTask()
  {
    this.user.Tasks?.push(new Task(false,this.taskTitle));
    this.sub=this.utils.updateUser(this.user._id!,this.user).subscribe();
    this.addNewTask=false;
    this.restAddTaskForm();
  }
  restAddPostForm()
  {
    this.title="";
    this.body="";
  }
  restAddTaskForm()
  {
    this.taskTitle="";
  }
}
