import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  name : String=""
  email : String=""
  sub1: Subscription = new Subscription;
  constructor(private utils : UserUtilsService,private router : Router) { }

  ngOnInit(): void {
  }

  addUser()
  {
    this.sub1 = this.utils.addUser(new User(this.name,this.email)).subscribe(data => 
      {  
          this.router.navigate(['/']).then(data=>window.location.reload())
              
      })
  }
  ngOnDestroy(): void
  {
    this.sub1.unsubscribe();
  }
}
