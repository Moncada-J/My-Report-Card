import React, {Component, useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

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
    teacherPrefix: '',
    teacherName: "",
    gradeLevel: '',
    year: "2021-2022"
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
      <TextField id="select" variant="filled" label="Grade Level" select value={formData.gradeLevel}   name="gradeLevel" onChange={handleChange} required>
        <MenuItem value="Kindergarten">Kindergarden</MenuItem>
        <MenuItem value="1st Grade">1st Grade</MenuItem>
        <MenuItem value="2nd Grade">2nd Grade</MenuItem>
        <MenuItem value="3rd Grade">3rd Grade</MenuItem>
        <MenuItem value="4th Grade">4th Grade</MenuItem>
        <MenuItem value="5th Grade">5th Grade</MenuItem>
    </TextField>
     <TextField id="select" variant="filled" label="School Year" select value={formData.schoolYear}   name="schoolYear" onChange={handleChange} required>
        <MenuItem value="2018-2019">2018-2019</MenuItem>
        <MenuItem value="2019-2020">2019-2020</MenuItem>
        <MenuItem value="2020-2021">2020-2021</MenuItem>
        <MenuItem value="2021-2022">2020-2021</MenuItem>
    </TextField>
    <TextField id="select" variant="filled" label="Teacher Title" select value={formData.teacherPrefix}   name="teacherPrefix" onChange={handleChange} required>
        <MenuItem value="Ms">Ms</MenuItem>
        <MenuItem value="Mrs">Mrs</MenuItem>
        <MenuItem value="Mr">Mr</MenuItem>
        <MenuItem value="Mx">Mx</MenuItem>
    </TextField>
    <TextField id="filled-basic" label="Teacher Name" placeholder="Last Name"
        variant="filled" name="teacherName" value={formData.teacherName}
        onChange={handleChange} required />
    <Button type="submit" disabled={invalidForm} variant="outlined" color="primary">
        Save
    </Button>
    </form>

  </>
  )
}

export default AddStudentPage;