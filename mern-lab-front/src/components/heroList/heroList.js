import React, { Component } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './heroList.css';
import HeroListModal from '../heroListModal/HeroListModal';

class heroList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			setModalShow: false,
		};
	}

	render() {
		return (
			<div className='cards'>
				<p className='choices-info'>
					Choose a Marvel, DC, or Custom character among the choices below to go
					to battle!
				</p>
				{this.props.heroes.map((hero) => {
					// console.log(hero);
					return (
						<div key={hero.id}>
							<CardGroup>
								<Button
									className='hero-card'
									onClick={() => this.setState({ setModalShow: true })}
									style={{ 'background-color': 'rgb(0, 18, 186)' }}>
									<Card style={{ 'background-color': 'rgb(255, 232, 126)' }}>
										<Card.Body>
											<Card.Title
												className='text-name'
												style={{ color: 'rgb(128, 0, 1)' }}>
												{hero.name}
											</Card.Title>
											<Card.Text>
												<img className='image' src={`${hero.image}`} />
											</Card.Text>
										</Card.Body>
										<Card.Footer style={{ height: '2rem' }}>
											<small className='text-muted'>{hero.publisher}</small>
										</Card.Footer>
									</Card>
								</Button>
							</CardGroup>
						</div>
					);
				})}
				<Link to='/battle'>Let's Fight!</Link>
				<HeroListModal
					show={this.state.modalShow}
					onHide={() => this.setState({ setModalShow: false })}
				/>
			</div>
		);
	}
}

export default heroList;
