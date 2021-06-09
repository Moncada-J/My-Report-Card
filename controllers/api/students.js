const Student = require('../../models/student');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const students = await Student.find({});
    res.status(200).json(students);
}

async function create(req, res) {
    const student = await Student.create(req.body);
    res.status(201).json(student);
}

