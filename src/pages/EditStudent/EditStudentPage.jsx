import React, {useState, useEffect, useRef } from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function EditStudentPage(props) {
    const location = useLocation()

    const [invalidForm, setValidForm] = useState(true);
    const [formData, setFormData] = useState(location.state.student)

    const formRef = useRef();
     
    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) :
        setValidForm(true)
    }, [formData]);


 const handleSubmit = e => {
    e.preventDefault()
    props.handleUpdateStudent(formData);
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

return(
        <>
            <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
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
                Save Changes
            </button>
            <Link to='/students'>Discard</Link>
        </form>
    </>
    );
}