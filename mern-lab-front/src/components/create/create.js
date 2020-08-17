import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

class create extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			publisher: 'Custom',
			strength: null,
			durability: null
		};
	}
	render() {
		return (
			<div>
				<Form>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Hero Name</Form.Label>
						<Form.Control type='text' placeholder='Enter Hero Name' />
						<Form.Text className='text-muted'>Fun excerpt</Form.Text>
					</Form.Group>
					{/* <Form.Group>
						<Form.File
							id='exampleFormControlFile1'
							label='Example file input'
						/>
					</Form.Group> */}
					<Button variant='info'>Roll for strength and durability</Button>

					<Button variant='primary' type='submit'>
						Create
					</Button>
				</Form>
			</div>
		);
	}
}
export default create;
