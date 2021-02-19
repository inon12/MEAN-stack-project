import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUtilsService } from '../user-utils.service';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { Task } from '../task';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css']
})
export class AddNewTodoComponent implements OnInit {

  constructor(private location : Location,private ar :ActivatedRoute,private utils :UserUtilsService,private router : Router) { }

  title : String="";
  id : string = "";
  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;
  sub3: Subscription = new Subscription;
  user : User =new User()
  ngOnInit(): void {
    this.sub1= this.ar.parent!.params.subscribe(data=>
      {
        this.id=data['id']
        this.sub2= this.utils.getUser(this.id).subscribe(data => this.user=data);
      }
    )
     
  }
  back()
  {
    this.location.back()
  }
  addTask()
  {
    
    this.user.Tasks?.push(new Task(false , this.title))
    this.sub3=this.utils.updateUser(this.id,this.user).subscribe(data =>{
        this.router.navigate(['/user-deatils',this.id]).then(()=> window.location.reload())
    })
    
  }
 
  ngOnDestroy(): void
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }
}
