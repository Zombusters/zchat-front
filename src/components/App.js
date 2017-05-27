import React, { Component, PropTypes } from 'react';
import { Provider }         from 'react-redux';

import LoginPage from '../containers/LoginPageContainer.js';
import Router from './Main/Router';

import store from '../store/configureStore.js';

import MainPage from '../containers/MainPageContainer';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainPage />
			</Provider>
		);
	}
}
