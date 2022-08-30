const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const myRoute = require('./route/email');
const route = require('./route/gmail');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(myRoute);
app.use(route);

app.listen(5000, () => {
    console.log('server started on port 5000')
})