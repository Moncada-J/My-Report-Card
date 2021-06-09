import React, {Component, useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
// import SelectInput from '@material-ui/core/Select/SelectInput';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }, 
  },
}));

function AddStudentPage(props){
  const classes = useStyles();
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    studentName: '',
    DOB: 'Invalid DOB',
    teacherName: "Missing Teacher's Name",
    gradeLevel: 'Missing Grade Level'
  });



  const formRef = useRef();
  useEffect(() => {
    formRef.current.checkValidity()
    ? setValidForm(false) 
     : setValidForm(true);
  }, [formData]);

    const handleSubmit = e => {
    e.preventDefault();
    props.handleAddStudent(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return(
    <>
      <h1>Add New Student</h1>
      <form className={classes.root} noValidate autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <TextField id="filled-basic" label="Student Name" placeholder="Last, First Name"
        variant="filled" name="studentName" value={formData.studentName}
        onChange={handleChange} required />
       <Select
          id="filled-select-currency"
          label="Select Grade Level"
          name="gradeLevel"
          value={formData.gradeLevel}
          onChange={handleChange}
          variant="filled"
          required>
        <option>Kindergarden</option>
        <option>1st Grade</option>
        <option>2nd Grade</option>
        <option>3rd Grade</option>
        <option>4th Grade</option>
        <option>5th Grade</option>
      </Select>
    </form>
  </>
  )
}

export default AddStudentPage;