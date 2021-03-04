import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'


import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';



import{HttpClientModule} from '@angular/common/http'
import {Routes,RouterModule} from '@angular/router';
import { StartComponent } from './start/start.component'
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PostComponent } from './post/post.component';
import { TaskComponent } from './task/task.component';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';



const appRoutes :Routes = 
[
  {path : "user-deatils/:id" ,component : UserDeatilsComponent,children : [
    {path : "" , component : TodosComponent , outlet : 'tasks'},
    {path : "Add" , component : AddNewTodoComponent , outlet : 'tasks'},
    {path : "Add" , component : AddNewPostComponent , outlet : 'posts'},
    {path : "" , component : PostsComponent , outlet : 'posts'},
  ]},
  {path : "AddUser" ,component : AddUserComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    StartComponent,
    UserComponent,
    PostsComponent,
    TodosComponent,
    AddNewTodoComponent,
    AddNewPostComponent,
    AddUserComponent,
    PostComponent,
    TaskComponent,
    UserDeatilsComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
