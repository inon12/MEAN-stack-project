import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserUtilsService } from '../user-utils.service';
import { Post, User } from '../user';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  constructor(private location : Location,private ar :ActivatedRoute,private utils :UserUtilsService,private router : Router) { }

  title : String="";
  body : String = "";
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
  addPost()
  {
    this.user.Posts?.push(new Post(this.title , this.body))
    this.sub3=this.utils.updateUser(this.id,this.user).subscribe(data => 
      {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/user-deatils',this.id]);
      });     
      })
  
  }
  ngOnDestroy(): void
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }
}
