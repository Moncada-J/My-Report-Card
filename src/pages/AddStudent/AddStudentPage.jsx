import React, {useState, useRef, useEffect} from 'react';

export default function AddStudentPage(props){
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    studentName: '',
    teacherPrefix: '',
    teacherName: '',
    gradeLevel: '',
    year: '2021'
  })
  const formRef = useRef();
  
  useEffect(() => { 
    formRef.current.checkValidity() ? 
    setValidForm(false) : setValidForm(true);
  }, [formData]);

    const handleSubmit = e => {
    e.preventDefault()
    props.handleAddStudent(formData);
  }

  const handleChange = e => {
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
  <>
    <h1>Add New Student</h1>
    <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name *</label>
          <input
            type="name"
            className="form-control"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Grade Level (K-5th)</label>
          <input
           type="text"
            className="form-control"
            name="gradeLevel"
            value={ formData.gradeLevel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>School Year</label>
          <input
           type="number"
            className="form-control"
            name="schoolYear"
            value={ formData.schoolYear}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Teacher Title</label>
          <input
           type="text"
            className="form-control"
            name="teacherPrefix"
            value={ formData.teacherPrefix}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Teacher Name (Last Name *)</label>
          <input
          type="name"
            className="form-control"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          ADD STUDENT
        </button>
    </form> 
  </>
  );
}

