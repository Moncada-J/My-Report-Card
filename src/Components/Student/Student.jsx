import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Student({students}) {
    return (
    <>
        <div>
            <FontAwesomeIcon className="studentIcon" icon={faGraduationCap} size="2x"/><strong>{students.studentName}</strong>
        </div>
        </>
    );
}

export default Student;