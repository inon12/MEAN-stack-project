const mongoose = require('mongoose')

let appSchema = mongoose.Schema;

let TaskItemSchema = new appSchema({
    ID : Number,
    Title : String,
    Completed : Boolean
});
 let userSchema = new appSchema(
     {
            Name : String,
            Email : String,
            Street : String,
            City : String,
            Zipcode : Number,
            Tasks : [
                        {
                            ID : Number,
                            Title : String,
                            Completed : Boolean
                        }
                    ],
            Posts : [
                        {
                            ID : String,
                            Title : String,
                            Body : String
                        }
                    ]             
                        
    })




     
 module.exports = mongoose.model("users",userSchema,"users");