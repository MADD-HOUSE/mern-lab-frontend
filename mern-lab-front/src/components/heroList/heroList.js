import React, { Component } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './heroList.css';

class heroList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='cards'>
				{this.props.heroes.map(hero => {
					console.log(hero);
					return (
						<div key={hero.id}>
							<CardGroup>
								<Button>
									<Card style={{ 'background-color': 'yellow' }}>
										<Card.Body>
											<Card.Title style={{ color: 'black' }}>
												{hero.name}
											</Card.Title>
											<Card.Text>
												<img className='image' src={`${hero.image}`} />
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											<small className='text-muted'>{hero.publisher}</small>
										</Card.Footer>
									</Card>
								</Button>
							</CardGroup>
						</div>
					);
				})}
				<Link to='/battle'>Let's Fight!</Link>
			</div>
		);
	}
}

export default heroList;
