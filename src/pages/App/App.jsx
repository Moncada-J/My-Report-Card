import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as studentAPI from '../../utilities/students-api';
import AuthPage from '../AuthPage/AuthPage';
import AddStudentPage from '../AddStudent/AddStudentPage';
import StudentsPage from '../Students/StudentsPage';
import StudentDetailPage from '../StudentDetailPage/StudentDetailPage';
import EditStudentPage from '../EditStudent/EditStudentPage.jsx';
import NavBar from '../../Components/NavBar/NavBar';


// css/material ui imports
import './App.css';

export default function App(props) {
	const [user, setUser] = useState(getUser());
	const [students, setStudents] = useState([]);
	const history = useHistory();

useEffect(() => {
  history.push('/');
}, [students, history]);

useEffect(() => {
	async function getStudents() {
		const students = await studentAPI.getAll();
		setStudents(students);
	}
	getStudents();
	}, [])

	// handle functions for CRUD
	async function handleAddStudent (newStudentData){
		const newStudent = await studentAPI.create(newStudentData);
		setStudents([...students, newStudent]);
	}
	async function handleUpdateStudent(updatedStudentData) {
		const updatedStudent = await studentAPI.update(updatedStudentData);
		const newStudentArray = students.map(s => 
			s._id === updatedStudent._id ? updatedStudent : s );	
		setStudents(newStudentArray);
	}

	async function handleDeleteStudent(id) {
		await studentAPI.deleteOne(id);
		setStudents(students.filter(s => s._id !== id))
	}

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route exact path="/students">
							<StudentsPage
								user={user}
                  				setUser={setUser}
								students={students} 
								handleDeleteStudent={handleDeleteStudent}
							/>
						</Route>
						<Route exact path="/students/new">
							<AddStudentPage
							handleAddStudent={handleAddStudent} 
							user={user}
                			setUser={setUser}/>
						</Route>
						<Route exact path="/students/info">
							<StudentDetailPage />
						</Route>
						<Route exact path="/students/edit">
							<EditStudentPage
								handleUpdateStudent={handleUpdateStudent}
							/>
						</Route>
						<Redirect to='/students' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
