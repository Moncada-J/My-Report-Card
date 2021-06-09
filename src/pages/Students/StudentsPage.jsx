import React from 'react';
import * as usersService from '../../utilities/users-service';

export default function StudentsPage() {
	async function handleCheckToken() {
		usersService.checkToken();
	}

	return (
		<>
			<h1>Student Roster</h1>
			<button onClick={handleCheckToken}>
				Check When My Login Expires
			</button>
		</>
	);
}
