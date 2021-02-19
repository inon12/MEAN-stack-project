const express =require('express')

let appRouter = express.Router();

const usersBL = require('../Models/usersBL')

appRouter.route('/')
    .get(async function(req,res)
    {
       let result= await usersBL.getAll();
       res.json(result);
    })

appRouter.route('/:id')
    .get(async function(req,res)
    {
        let id = req.params.id;
        let result = await usersBL.getById(id);
        res.json(result);
    })

appRouter.route('/')
    .post(async function(req,res)
    {
        let newUserData = req.body;
        let result = await usersBL.addUser(newUserData);
        res.json(result);
    })
appRouter.route('/:id')
    .put(async function(req,res)
    {
        let id = req.params.id
        let newUserData = req.body;
        let result = await usersBL.updateUser(id,newUserData);
        res.json(result); 
    })
appRouter.route('/:id')
    .delete(async function(req,res)
    {
        let id = req.params.id;
        let result = await usersBL.delete(id);
        res.json(result);
    })




module.exports = appRouter;