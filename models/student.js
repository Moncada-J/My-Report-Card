// const { DatePicker } = require('@material-ui/pickers');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentName: { type: String, required: true },
    DOB: {
      type: Date,
      default: function () {
        return new Date().getDate();
      },
    },
    teacherName: { type: String, required: true },
    gradeLevel: {
      type: String,
      required: true,
      default: "Kindergarden",
      enum: [
        "Kindergarden",
        "1st Grade",
        "2nd Grade",
        "3rd Grade",
        "4th Grade",
        "5th Grade",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
