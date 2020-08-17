import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/nav/Nav';
import HeroList from './components/heroList/heroList';
import Hero from './components/hero/hero';
import Home from './components/home/home';
import Create from './components/create/create';
import Battle from './components/battle/Battle';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentWillMount() {
		axios.get(`https://hero-royale-db-test.herokuapp.com/heroes`).then(res => {
			this.setState({
				data: res.data
			});
		});
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<Route exact path='/' component={Home} />
				<Route
					path='/heroes'
					render={() => {
						return <HeroList heroes={this.state.data} />;
					}}
				/>
				<Route
					path='/create'
					render={() => {
						return <Create />;
					}}
				/>
				<Route
					path='/battle'
					render={() => {
						return <Battle />;
					}}
				/>
				{/* <Route
					path='/heroes/:heroid'
					render={routerProps => {
						return <Hero id={routerProps.match} />;
					}}
				/> */}
			</div>
		);
	}
}

export default App;
