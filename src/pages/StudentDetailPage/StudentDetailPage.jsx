import React from 'react';
import StudentDetailCard from '../../Components/StudentDetail/StudentDetailCard';
import {useLocation} from 'react-router-dom';

function StudentDetailPage(props) {
    const { state: {student} } = useLocation()

return (
    <>
        <h1>Student Profile</h1>
        <StudentDetailCard
            key={student._id}
            student={student}
        />
    </>
    );
}

export default StudentDetailPage;
