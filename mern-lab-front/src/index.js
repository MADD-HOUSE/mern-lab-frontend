import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './fonts/AVENGEANCE_HEROIC_AVENGER_BD.ttf';
import './fonts/The_Amazing_Spider-Man.ttf';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);