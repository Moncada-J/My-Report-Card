const Student = require('../../models/student');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
}

async function index(req, res) {
    const students = await Student.find({});
    res.status(200).json(students);
}

async function create(req, res) {
    const student = await Student.create(req.body);
    console.log('successful')
    res.status(201).json(student);
}

async function show(req, res) {
  const student = await Student.findById(req.params.id);
  res.status(200).json(student);
}

async function update(req, res) {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedStudent);
}

async function deleteOne(req, res) {
    const deletedStudent = await Student.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedStudent)
}