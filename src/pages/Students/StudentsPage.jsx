import React from 'react';
import * as usersService from '../../utilities/users-service';
import Student from '../../Components/Student/Student';

function StudentsPage({students}) {
	const s = students.map(student => 
		<Student 
		key={student._id}
		students={student}
		/>
		);
	return (
		<>
			<h1>Student Roster</h1>
			<div className="studentPage">
				{s}
			</div>
		</>
	);
}

export default StudentsPage;