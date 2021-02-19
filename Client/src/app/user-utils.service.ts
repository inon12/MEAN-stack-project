import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserUtilsService {

url : string ="http://localhost:8000/api/users"


constructor(private http : HttpClient) { }

public getAllUsers()
{
  return this.http.get<User[]>(this.url)
}
public getUser(id :string)
{
  return this.http.get<User>(this.url+'/'+id)
}
public updateUser(id :String,user :User)
{ 
  return this.http.put<User>(this.url+'/'+id,user);
}

public addUser(user :User)
{
  return this.http.post(this.url,user)
}
public delete(id :String)
{
  
  return this.http.delete<User>(this.url+'/'+id);
}

}
