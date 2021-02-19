import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {



  
  constructor(private ar : ActivatedRoute, private utils : UserUtilsService) { }

  userid:string =""

  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;
  sub3: Subscription = new Subscription;
  user : User=new User()
  ngOnInit(): void {
    this.sub1= this.ar.params.subscribe(data=>
      {
        this.userid=data['id']
        this.sub2=this.utils.getUser(this.userid).subscribe(data=>
          {
            this.user=data;
          })
      }
    )
  }
  updateTask(task : Task)
  {
    let x = this.user.Tasks?.findIndex(x=>task._id==x._id)
    this.user.Tasks![x!].Completed=true;
    this.sub3=this.utils.updateUser(this.userid,this.user).subscribe(data=>window.location.reload())
  }
  ngOnDestroy() : void
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

}
