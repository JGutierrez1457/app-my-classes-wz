const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(express.urlencoded({ extended: true, limit: "30mb"}));
app.use(express.json({limit:"30mb",extended:true}));
app.use(cors());

if(process.env.NODE_ENV!=='production'){
    dotenv.config();
    app.use(morgan('dev'))
}
if(procces.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../client/build')))
}

app.use('/api/classes/',require('../components/classes/classes.router'));
app.use('/api/auth/',require('../components/users/authUsers.router'));
app.use('/api/users/',require('../components/users/users.router'))

module.exports = app;