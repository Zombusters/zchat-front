import React, { Component, PropTypes } from 'react';
import { Provider }         from 'react-redux';

import LoginPage from '../containers/LoginPageContainer.js';
import Router from './Main/Router';

import store from '../store/configureStore.js';

export default class App extends Component {
	static propTypes = {
		token: PropTypes.string
	}

	state = {
		token: null
	}

	render() {
		const { token } = this.props;

		return (
			<Provider store={store}>
				{token
					? <LoginPage />
					: <Router />}
			</Provider>
		);
	}
}
