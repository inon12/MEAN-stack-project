const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser')

const usersController = require('./Controllers/usersController')
require('./Config/database')

const app = express();

app.use(bodyParser.urlencoded({extended : true}))
.use(bodyParser.json());

app.use(cors())


app.use('/api/users',usersController);

app.listen(8000)