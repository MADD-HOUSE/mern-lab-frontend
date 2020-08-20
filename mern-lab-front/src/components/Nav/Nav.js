import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
	render() {
		return (
			<div>
				<Navbar className='navbar'>
					<Link to='/'>
						<h2 href='#home'>
							<span className='superhero'>Superhero</span>
							<p className='battle'>BATTLE ROYALE</p>
						</h2>
					</Link>
					<Nav className='mr-auto'>
						<Link to='/create'>
							{' '}
							<h5 href='#features'>Create</h5>
						</Link>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
export default NavigationBar;
