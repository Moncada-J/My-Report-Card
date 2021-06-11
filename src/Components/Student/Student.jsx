import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Student({student, handleDeleteStudent}) {
    return (
    <>
        <div>
            <FontAwesomeIcon className="studentIcon" icon={faGraduationCap} size="2x"/><strong>{student.studentName}</strong>
        <button
        className='btn btn-xs btn-danger margin-left-10'
        onClick={() => handleDeleteStudent(student._id)}
        >
        Delete
        </button>
        </div>
        </>
    );
}

export default Student;