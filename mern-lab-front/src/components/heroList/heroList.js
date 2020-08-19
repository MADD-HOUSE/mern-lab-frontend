import React, { Component } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './heroList.css';
import HeroListModal from '../heroListModal/HeroListModal';

class HeroList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			setModalShow: false,
			chosenHero: {},
		};
	}

	render() {
		return (
			<div className='main-view'>
				<h1 className='choices-info'>
					Choose a Marvel, DC, or Custom character among the choices below to go
					to battle!
				</h1>
				<div className='cards'>
					{this.props.heroes.map((hero) => {
						// console.log(hero);
						return (
							<div key={hero.id}>
								<CardGroup>
									<Button
										className='hero-card'
										value={hero._id}
										onClick={(e) => {
											// console.log(e.currentTarget.value);
											const chosenHero = this.props.heroes.find(
												(hero) => hero._id === e.currentTarget.value
											);
											console.log(chosenHero);
											this.setState({
												setModalShow: true,
												modalShow: true,
												chosenHero: chosenHero,
											});
										}}
										style={{ 'background-color': 'rgb(0, 18, 186)' }}>
										<Card style={{ 'background-color': 'rgb(255, 232, 126)' }}>
											<Card.Body>
												<Card.Title
													className='text-name'
													style={{ color: 'rgb(128, 0, 1)' }}>
													{hero.name}
												</Card.Title>
												<Card.Text>
													<img className='image' src={`${hero.image}`} alt='' />
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
						chosenHero={this.state.chosenHero}
						show={this.state.modalShow}
						onHide={() =>
							this.setState({ setModalShow: false, modalShow: false })
						}
					/>
				</div>
			</div>
		);
	}
}

export default HeroList;
