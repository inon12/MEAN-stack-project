import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserUtilsService } from '../user-utils.service';
import {  User} from '../user'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private utils :UserUtilsService) { }

  searchDeatils : string="";
  // users : any;
  // tempUsers : User[] =;
  users : User[] = [new User()]
  tempUsers : User[] = [new User()]

  sub : Subscription;
  addUser : Boolean = false;
  tasksAndPostsflag : Boolean = false;
  tasksAndPostsUser : User = new User();
  ngOnInit(): void { 
    this.getAllUsers();
  } 

  filter()
  {

  }
  getAllUsers()
  {
    this.sub = this.utils.getAllUsers().subscribe(data =>
      {
          this.users = data;
          this.tempUsers=data;
      });
  }
  tasksAndPost(user : User)
  {
    this.addUser=false;
    this.tasksAndPostsflag= true;
    this.tasksAndPostsUser=user;
  }
  newUser()
  {
    this.addUser=true;
    this.tasksAndPostsflag= false;
  }
  search()
  {
    if(this.searchDeatils=="")
    {
      this.users=this.tempUsers;
    }
    this.users=this.tempUsers.filter(x=>x.Name?.includes(this.searchDeatils) || x.Email?.includes(this.searchDeatils))
  }
}
