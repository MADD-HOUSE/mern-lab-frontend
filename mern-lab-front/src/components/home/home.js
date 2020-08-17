import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class home extends Component {
	render() {
		return (
			<div>
				<h1>
					<p className='superhero'>Superhero</p> <p className='battle'>Battle Royale</p>
				</h1>
				<img src='' alt='welcome' />
				<Link to='/heroes'>
					<button>Choose a fighter</button>
				</Link>
			</div>
		);
	}
}
export default home;
