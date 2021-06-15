import React from 'react';
// import Video from './welcomebanner';
// import * as usersService from '../../utilities/users-service';
import Student from '../../Components/Student/Student';
import Banner from './welcome.gif';
// import Video from '../../Components/BannerVideo/BannerVideo';

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
	{/* <Video /> */}
	<img className="banner" src={Banner} alt="banner" />
	<h1>Students in the Classroom</h1>
		<div>
			{s}
      	</div>
	</>
	);
}

export default StudentsPage;