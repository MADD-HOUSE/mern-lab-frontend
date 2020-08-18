import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './superhero-battle-royale.jpg';
class home extends Component {
	render() {
		return (
			<div className='homepage'>
				<h1 className='welcome-header'>
					Welcome to the superhero battle of the ages!
					<p className='instructions'>Click on the picture below to begin</p>
				</h1>

				<container className='homepage-container'>
					<Link to='/heroes'>
						<img
							src={Image}
							alt='Superhero Battle Royale'
							className='battle-image'
						/>
					</Link>
				</container>
			</div>
		);
	}
}
export default home;
