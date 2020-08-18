import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function HeroListModal(props) {
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
				<p>
					Stats
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default HeroListModal;
