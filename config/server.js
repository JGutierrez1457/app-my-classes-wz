const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true, limit: "30mb"}));
app.use(express.json({limit:"30mb",extended:true}));
app.use(cors());

if(process.env.NODE_ENV!=='production'){
    dotenv.config();
    app.use(morgan('dev'))
}

app.use('/api/classes/',require('../components/classes/classes.router'));
module.exports = app;