import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
	render() {
		return (
			<div>
				<Navbar className='navbar'>
					<Link to='/'>
						<Navbar.Brand href='#home'>
							<span className='superhero'>Superhero</span>
							<p className='battle'>BATTLE ROYALE</p>
						</Navbar.Brand>
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
