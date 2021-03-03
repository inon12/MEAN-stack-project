import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router : Router ,private utils : UserUtilsService) { }
  flag : Boolean =false;
  taskComleted : Boolean =true;


  @Input()
  user : User = new User()
  


  @Output()
  notify : EventEmitter<User> = new EventEmitter();

  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;


  ngOnInit(): void {
        this.user.Tasks?.forEach(item => {this.taskComleted= this.taskComleted&&item.Completed!})
  }

  public presentOterData()
  {
    this.flag=true;
  }

  public HideOtherData()
  {
    this.flag=false;
  }
  public update(){
    this.sub1=this.utils.updateUser(this.user._id!,this.user).subscribe(data=>alert(data))
  }
  public delete()
  {
    this.sub2=this.utils.delete(this.user._id!).subscribe(data=>{
      this.router.navigate(['/']).then(data=>window.location.reload())
    })
  }

  public SendIdToParent()
  {

    this.router.navigate(['/user-deatils',this.user._id])
  }
  ngOnDestroy() : void
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
