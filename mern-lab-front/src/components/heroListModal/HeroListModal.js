import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import UpdateHero from '../UpdateHero/UpdateHero';
import { Link } from 'react-router-dom';

function HeroListModal(props) {
	const handleDelete = () => {
		console.log(props.chosenHero._id);
		axios
			.delete(
				`https://hero-royale-db-test.herokuapp.com/heroes/${props.chosenHero._id}`
			)
			.then(res => console.log(res));
	};
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					{props.chosenHero.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<img src={props.chosenHero.image} alt='' />
				<p>Stats</p>
			</Modal.Body>
			<Modal.Footer>
				{props.chosenHero.id ? (
					''
				) : (
					<div>
						<Button
							variant='danger'
							onClick={() => {
								handleDelete();
								props.onHide();
							}}>
							Delete
						</Button>
						<Link to={`/update/${props.chosenHero._id}`}>
							{' '}
							<Button>Update</Button>
						</Link>
					</div>
				)}
				<Button>Choose</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default HeroListModal;
