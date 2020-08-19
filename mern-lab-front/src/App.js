import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Nav/Nav';
import HeroList from './components/HeroList/HeroList';
// import Hero from './components/hero/hero';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Battle from './components/Battle/Battle';
import UpdateHero from './components/UpdateHero/UpdateHero';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	componentWillMount() {
		axios
			.get(`https://hero-royale-db-test.herokuapp.com/heroes`)
			.then((res) => {
				this.setState({
					data: res.data,
				});
			});
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/heroes'
					render={() => {
						this.componentWillMount();
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
				<Route
					path='/update/:heroid'
					render={(routerProps) => {
						return (
							<UpdateHero
								history={routerProps.history}
								hero={routerProps.match}
								heroes={this.state.data}
							/>
						);
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
