const users = require('./usersModel')



exports.getAll= function()
{
    return new Promise((resolve,reject)=>
    {
        users.find({},function(err, data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

exports.getById = function (id)
{
    return new Promise((resolve,reject)=>
    {
        users.findById(id,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}
exports.addUser = function (newUserData)
{
    return new Promise((resolve,reject)=>
    {
        let newUser = new users(
            {
                Name : newUserData.Name,
                Email : newUserData.Email,
                Street : newUserData.Street,
                Zipcode : newUserData.Zipcode,
                Tasks : newUserData.Tasks,
                Posts : newUserData.Posts
            }
        )

        newUser.save(function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Add succed")
            }
        })
    })
}
exports.updateUser = function (id,newUserData)
{
    return new Promise((resolve,reject)=>
    {
        // let newUser = new users(
        //     {
        //         Name : newUserData.Name,
        //         Email : newUserData.Email,
        //         Street : newUserData.Street,
        //         Zipcode : newUserData.Zipcode,
        //         Tasks : newUserData.Tasks,
        //         Posts : newUserData.Posts
        //     }
        // )

        users.findByIdAndUpdate(id,newUserData,function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("update Succed!")
            }
        })
    })
}

exports.delete = function(id)
{
    return new Promise((resolve,reject)=>
    {
        users.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err)
            }
            else 
            {
                resolve("Deleted!")
            }
        })

    })
}


