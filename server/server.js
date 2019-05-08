const express = require('express');
const app = express();
const bodyParser = require('body-parser');
cors = require('cors');

const PORT = 4000;

//const user = require('./routes/user.js');

app.use(cors());
app.use(bodyParser.json());

//mircoservices
app.use(user);

//Run server on port PORT
app.listen(PORT, function() {
    console.log('Server now running on port: ' + PORT);
});