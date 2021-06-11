import React from 'react';
// import * as usersService from '../../utilities/users-service';
import Student from '../../Components/Student/Student';

function StudentsPage({students, handleDeleteStudent}) {
	const s = students.map(student => 
		<Student 
		key={student._id}
		student={student}
		handleDeleteStudent={handleDeleteStudent}
		/>
		);
	return (
	<>
	<h1>Students in the Classroom</h1>
		<div>
			{s}
      	</div>
	</>
	);
}

export default StudentsPage;