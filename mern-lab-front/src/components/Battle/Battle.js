import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BattleModal(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			className='modal-card'>
			<Modal.Header closeButton>
				<Modal.Title id='modal-hero-name'>
					<h1>Battle</h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='modal-body'>
				<div>
					{!props.fighterOne ? (
						''
					) : (
						<div>
							<img src={props.fighterOne.image} alt='' />
							<h3>VS</h3>
						</div>
					)}
					{!props.fighterTwo ? (
						''
					) : (
						<div>
							<img src={props.fighterTwo.image} alt='' />
							<h3>VS</h3>
						</div>
					)}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button>Cancel</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default BattleModal;
