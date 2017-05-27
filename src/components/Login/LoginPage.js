import React, { Component, PropTypes } from 'react';

import './LoginPage.css';

export default class LoginPage extends Component {
	static propTypes = {
		logIn: PropTypes.func
	}

	render() {
		return (
			<div>
                <p onClick={this.props.logIn}>Login</p>
            </div>
		);
	}
}
