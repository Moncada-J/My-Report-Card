// Connect the the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Student = require('/models/student');
// const Report = require('./models/category');

// Local variables will come in handy
let u, s, r;
