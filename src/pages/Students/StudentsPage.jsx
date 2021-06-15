import React from 'react';
import Banner from './welcome.gif';
import Chalkboard from '../../Components/Chalkboard/Chalkboard';
import './StudentPage.css';

function StudentsPage({students, handleDeleteStudent}) {
	const s = students.map(student => 
		<Chalkboard 
		key={student._id}
		student={student}
		handleDeleteStudent={handleDeleteStudent}
		/>
		);
	return (
	<>
		<main className="students-page">
			{/* <Helmet bodyAttributes={{style: 'background-color : #fff'}}/> */}
			<img className="banner" src={Banner} alt="banner" />
			<h1 className="students-title">My Classroom</h1>
			<div className="chalkboard">
				{s}
			</div>
		</main>
	</>
	);
}

export default StudentsPage;