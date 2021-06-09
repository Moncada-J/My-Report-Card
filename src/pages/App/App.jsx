import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as studentAPI from '../../utilities/students-api';
import AuthPage from '../AuthPage/AuthPage';
import AddStudentPage from '../AddStudent/AddStudentPage';
import StudentsPage from '../Students/StudentsPage';
import NavBar from '../../Components/NavBar/NavBar';


// css/material ui imports
import './App.css';

export default function App() {
	const [user, setUser] = useState(getUser());
	const [students, setStudents] = useState([]);

	useEffect(() => {
		async function getStudents(){
			const students = await studentAPI.getAll();
			setStudents(students);
		}
		getStudents();
	}, [])

	// handle functions for CRUD
	async function handleAddStudent (newStudentData){
		const newStudent = await studentAPI.create(newStudentData);
		setStudents([...students, newStudent])
	}

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/students/new'>
							<AddStudentPage
							handleAddStudent={handleAddStudent} />
						</Route>
						<Route path='/'>
							<StudentsPage
								students={students} 
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
