import React from 'react';
import logo from './navlogo.png';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		userService.logOut();
		// Update state will also cause a re-render
		setUser(null);
	}

	return (
			<Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand className="navApp-title">
					<img className="navLogo" src={logo} alt="navlogo.png" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				  <Nav className="mr-auto">
					<Nav.Link><Link className="navLink" to='/students'>Student Roster</Link></Nav.Link>
					<Nav.Link><Link className="navLink" to='/students/new'>Add Student</Link></Nav.Link>
				  </Nav>
				  <hr />
				  <Nav>
					 <Navbar.Brand><FontAwesomeIcon className="navUserIcon" icon={faUserCircle} size="2x"/></Navbar.Brand><NavDropdown title={user.name} id="collasible-nav-dropdown custom-dropdown">
						<NavDropdown.Item className="navLink dropdownLink">Profile Settings</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item><Link className="navLink dropdownLink" to='' onClick={handleLogOut}>Log Out</Link></NavDropdown.Item>
					 </NavDropdown>
				  </Nav>
  				</Navbar.Collapse>
			</Navbar>
	);
}
