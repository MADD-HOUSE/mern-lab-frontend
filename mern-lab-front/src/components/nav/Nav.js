import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavigationBar extends Component {
	render() {
		return (
			<div>
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='#home'>Hero Cards</Navbar.Brand>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Create</Nav.Link>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
export default NavigationBar;
