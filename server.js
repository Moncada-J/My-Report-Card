const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// Always require and configure near the top
require('dotenv').config();

// connect to the database
require('./config/database');

const studentsRouter = require('./routes/api/students');

const app = express();

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user
// Be sure to mount before your routes
app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/students', studentsRouter);

//api routes will go here
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/students', ensureLoggedIn, require('./routes/api/students'));

// The following "catch all" route (note the *) is necessary
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), function () {
  console.log("Node server is running on port " + app.get("port"));
});