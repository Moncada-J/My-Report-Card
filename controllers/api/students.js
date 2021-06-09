const Student = require('../../models/student');

module.exports = {
    index,
}

async function index(req, res) {
    const students = await Student.find({});
    res.status(200).json(students);
}
