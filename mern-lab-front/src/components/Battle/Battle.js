import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BattleModal(props) {
	// const fighterOneStats =
	// 	props.fighterOne.strength + props.fighterOne.durability;
	// const fighterTwoStats =
	// 	props.fighterTwo.strength + props.fighterTwo.durability;
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
							<p>{props.fighterOne.name}</p>
						</div>
					)}
					<h3 className='versus'>VS</h3>
					{!props.fighterTwo ? (
						''
					) : (
						<div>
							<img
								src={props.fighterTwo.image}
								alt=''
								className='battle-modal-image'
							/>
							<p>{props.fighterTwo.name}</p>
						</div>
					)}
				</div>
			</Modal.Body>
			<Modal.Footer>
				{props.fighterOne && props.fighterTwo && (
					<div>
						{props.fighterOne.strength + props.fighterOne.durability >
						props.fighterTwo.strength + props.fighterTwo.durability ? (
							<div>
								<h2 className='winner'>{props.fighterOne.name} Wins!</h2>
							</div>
						) : (
							<div>
								<h2>{props.fighterTwo.name} Wins!</h2>
							</div>
						)}
					</div>
				)}
				<Button>Battle Again</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default BattleModal;
