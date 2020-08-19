import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateModal(props) {
	const handleSubmit = () => {
		axios
			.post(`https://hero-royale-db-test.herokuapp.com/heroes`, props.hero)
			.then((res) => {
				console.log(res);
			});
	};
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					{props.hero.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<img src={props.hero.image} alt='created' className='create-image' />
				<p>Strength: {props.hero.strength}</p>
				<p>Durability: {props.hero.durability}</p>
			</Modal.Body>
			<Modal.Footer>
				<Link to='/heroes'>
					<Button onClick={handleSubmit}>Confirm</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	);
}

export default CreateModal;
