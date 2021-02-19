import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  constructor(private ar : ActivatedRoute, private utils : UserUtilsService) { }

  userid:string =""
  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;
  user : User=new User()
  ngOnInit(): void {
    this.sub1= this.ar.params.subscribe(data=>
      {
        this.userid=data['id']
        this.sub2=this.utils.getUser(this.userid).subscribe(data=> this.user=data)
      }
    )
  }
  ngOnDestroy() : void
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
