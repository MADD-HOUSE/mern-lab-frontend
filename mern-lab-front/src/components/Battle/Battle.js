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
			<Modal.Body className='battle-modal-body'>
				<div className='the-battle'>
					{!props.fighterOne ? (
						''
					) : (
						<div>
							<img
								src={props.fighterOne.image}
								alt=''
								className='battle-modal-image'
							/>
						</div>
					)}
					<h3 className="versus">VS</h3>
					{!props.fighterTwo ? (
						''
					) : (
						<div>
							<img
								src={props.fighterTwo.image}
								alt=''
								className='battle-modal-image'
							/>
						</div>
					)}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<h2>Wins!</h2>
				<Button>Battle Again</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default BattleModal;
