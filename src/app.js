require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const routerUser = require('./routes/user');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', routerUser);

module.exports = app;