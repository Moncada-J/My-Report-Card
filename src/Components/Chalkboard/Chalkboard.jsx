import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import './Chalkboard.css';

// chalkboard credit => @Jerome Hardaway
//  https://codepen.io/jhardaway/pen/BaBQJgM?editors=1100

export default function Chalkboard({student, handleDeleteStudent}) {

return (
<>
        <ul>
            <li className="student-listItem">
                <FontAwesomeIcon className="studentIcon" icon={faGraduationCap} size="2x"/><strong>{student.studentName}</strong>
                <button
                className='btn btn-xs btn-danger margin-left-10'
                onClick={() => handleDeleteStudent(student._id)}
                >
                Delete
                </button>
            </li>
        </ul>
</>
)
}