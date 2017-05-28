import React, { Component, PropTypes } from 'react';

import LoginPage from '../containers/LoginPageContainer.js';
import Router from './Main/Router';

export default class MainPage extends Component {
	static propTypes = {
		token: PropTypes.bool,
		checkToken: PropTypes.func
	}

	state = {
		token: null
	}

	// async componentWillMount() {
	// 	try{
	// 		await this.props.checkToken();

	// 		this.setState({ token: this.props.token });
	// 	} catch(err) {
	// 		this.setState({ token: null });
	// 	}
	// }

	render() {
		const { token } = this.props;

		console.log('wtf', token)

		return !token
            ? <LoginPage />
            : <Router rem={this.props.rem} />;
	}
}
