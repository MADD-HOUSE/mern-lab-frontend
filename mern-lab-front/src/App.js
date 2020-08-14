import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/nav/Nav';
import HeroList from './components/heroList/heroList';


function App() {
	return (
		<div className='App'>
			<Navbar />
			<HeroList />
		</div>
	);
}

export default App;
