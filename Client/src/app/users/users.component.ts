import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private utils : UserUtilsService ,private router : Router) { }

  userFromChild : User =new User()
  searchDeatils : string=""
  users : User[] = [new User()]
  tempUsers : User[] = [new User()]
  sub1: Subscription = new Subscription;
  ngOnInit(): void {
    this.sub1=this.utils.getAllUsers().subscribe(data=>{
      this.users=data
      this.tempUsers=this.users;
     }
      )
  }
  showTodoAndPosts(id : String)
  {
    console.log(id);
  }
  AddUser()
  {
    this.router.navigate(['/AddUser'])
  }
  search()
  {
    if(this.searchDeatils=="")
    {
      this.users=this.tempUsers;
    }
    this.users=this.tempUsers.filter(x=>x.Name?.includes(this.searchDeatils) || x.Email?.includes(this.searchDeatils))
  }
  onSelectedUser(user :User)
  {
    for (let myUser of this.users)
    {
      myUser.BackgroundColor = "white";
    }

    user.BackgroundColor="#F8CBAD";

  }
  ngOnDestroy() : void
  {
    this.sub1.unsubscribe();
  }


}
