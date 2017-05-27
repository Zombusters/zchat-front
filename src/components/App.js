import React, { Component } from 'react';
import { Provider }         from 'react-redux';

import LoginPage from '../containers/LoginPageContainer.js';
import Router from './Main/Router';

import store from '../store/configureStore.js';

import logo from '../assets/logo.svg';

import './App.css';

export default class App extends Component {
	state = {
		token: null
	}

	render() {
		const { token } = this.state;
		return (
			<Provider store={store}>
				{!token
					? <LoginPage />
					: <Router />}
			</Provider>
		);
	}
}
