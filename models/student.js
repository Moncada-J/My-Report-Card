// const { DatePicker } = require('@material-ui/pickers');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentName: { type: String, required: true },
    year: {
      type: Number,
      default: function () {
      return (
        new Date().getFullYear()
      );
      },
    },
    teacherName: { type: String, required: true },
    teacherPrefix: {
      type: String,
      required: true,
      default: "Ms",
      enum: ["Ms", "Mrs", "Mr", "Mx"],
    },
    gradeLevel: {
      type: String,
      required: true,
      default: "Kindergarden",
      enum: [
        "Kindergarten",
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
