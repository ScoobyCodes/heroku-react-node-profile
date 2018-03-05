const path = require('path');
const dotenv = require('dotenv').config({path: path.join(__dirname, '.env')});
const express = require('express');
const cors =  require('cors');
const projects = require('./Routes/Projects/projects');
const app = express();
const resume = require('./Routes/Resume/resume');
const mail = require('./Routes/Mail/mail');
const bodyParser =require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, './Client/build')));

app.use('/projects',projects);
app.use('/download',resume);
app.use('/contactdata',mail);



app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './Client/build', 'index.html'));
});

app.listen(PORT);