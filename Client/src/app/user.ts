import { Task } from "./task";

export class User {
    
    constructor(public Name? : String,public Email? : String,public Tasks? : Task[],public _id? : String,public City? : String,public Street? : String,public Zipcode? : Number,public Posts? : Post[],public BackgroundColor? : String){}
}

export class Post {
    constructor(public Title : String,public Body : String){}
    
}


