import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'


import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'


import { AppComponent } from './app.component';

import{HttpClientModule} from '@angular/common/http'
import {Routes,RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';

import { AddUserComponent } from './add-user/add-user.component';
import { PostComponent } from './post/post.component';
import { TaskComponent } from './task/task.component';
import {MainPageComponent} from './main-page/main-page.component';
import { TasksAndPostsComponent } from './tasks-and-posts/tasks-and-posts.component'


const appRoutes :Routes = []



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    PostComponent,
    TaskComponent,
    MainPageComponent,
    TasksAndPostsComponent
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
