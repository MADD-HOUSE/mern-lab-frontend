import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UpdateHero extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			hero: {},
		};
	}
	componentWillMount() {
		const selectedHero = this.props.heroes.find(
			(hero) => hero._id === this.props.hero.params.heroid
		);
		this.setState({
			hero: selectedHero,
		});
	}

	handleOnChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		axios
			.put(
				`https://hero-royale-db-test.herokuapp.com/heroes/${this.props.hero.params.heroid}`,
				{ name: this.state.name }
			)
			.then((res) => {
				console.log(res);
				this.props.history.goBack();
			});
	};

	render() {
		return (
			<div>
				<Form className='hero-create-form'>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Hero Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='enter hero name'
							onChange={this.handleOnChange}
						/>
						<Form.Text className='stats'>
							<p>Strength: {this.state.hero.strength}</p>{' '}
							<p>Durability: {this.state.hero.durability}</p>
						</Form.Text>
					</Form.Group>
					{/* <Form.Group>
						<Form.File id='addImage' label='Add hero image here' />
					</Form.Group> */}

					<Link to='/heroes'>
						{' '}
						<Button
							variant='primary'
							type='submit'
							onClick={this.handleOnSubmit}>
							Update
						</Button>
					</Link>
				</Form>
			</div>
		);
	}
}
export default UpdateHero;
