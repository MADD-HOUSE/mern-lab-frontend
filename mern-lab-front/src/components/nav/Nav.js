import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
	render() {
		return (
			<div>
				<Navbar bg='dark' variant='dark'>
					<Link to='/'>
						<Navbar.Brand href='#home'>Hero Cards</Navbar.Brand>
					</Link>
					<Nav className='mr-auto'>
						<Link to='/create'>
							{' '}
							<Nav.Link href='#features'>Create</Nav.Link>
						</Link>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
export default NavigationBar;
