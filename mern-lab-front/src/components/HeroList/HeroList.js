import React, { Component } from 'react';
import { Card, CardGroup, Button, Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import './HeroList.css';
import HeroListModal from '../HeroListModal/HeroListModal';
import Battle from '../Battle/Battle';

class HeroList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			setModalShow: false,
			chosenHero: {},
			fighterOne: null,
			fighterTwo: null,
			battleModalShow: false,
			setBattleModalShow: false,
		};
	}

	render() {
		return (
			<Container className='main-view'>
				{!this.state.fighterOne ? (
					<h1 className='choices-info'>
						Choose a Marvel, DC, or Custom character among the choices below to
						go to battle!
					</h1>
				) : (
					<h1 className='choices-info'>Choose Your Opponent</h1>
				)}

				<Container className='cards'>
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

					<HeroListModal
						cancel={() => {
							this.setState({
								fighterOne: null,
								fighterTwo: null,
								setModalShow: false,
								modalShow: false,
							});
						}}
						confirmBattle={() => {
							this.setState({
								fighterTwo: this.state.chosenHero,
								setBattleModalShow: true,
								battleModalShow: true,
							});
						}}
						chosenHero={this.state.chosenHero}
						show={this.state.modalShow}
						fighterOne={this.state.fighterOne}
						onHide={() =>
							this.setState({ setModalShow: false, modalShow: false })
						}
						confirmFirstChoice={() => {
							if (!this.state.fighterOne) {
								this.setState({
									fighterOne: this.state.chosenHero,
									setModalShow: false,
									modalShow: false,
								});
							} else {
								this.setState({
									fighterTwo: this.state.chosenHero,
									setModalShow: false,
									modalShow: false,
								});
							}
						}}
					/>
					<Battle
						show={this.state.battleModalShow}
						onHide={() =>
							this.setState({
								setBattleModalShow: false,
								battleModalShow: false,
								modalShow: false,
								setModalShow: false,
								fighterOne: null,
								fighterTwo: null,
								chosenHero: {},
							})
						}
						fighterOne={this.state.fighterOne}
						fighterTwo={this.state.fighterTwo}
					/>
				</Container>
			</Container>
		);
	}
}

export default HeroList;
