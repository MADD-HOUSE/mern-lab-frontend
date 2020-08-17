import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/nav/Nav';
import HeroList from './components/heroList/heroList';
import Hero from './components/hero/hero';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	componentWillMount() {
		fetch(`https://hero-royale-db-test.herokuapp.com/heroes`, {
			method: 'GET',
			headers: {},
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					...this.state,
					loadings: true,
					data: res,
				});
			});
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<HeroList heroes={this.state.data} />;
				<Route
					path='/heroes/:heroid'
					render={(routerProps) => {
						return <Hero id={routerProps.match} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
