import React, { Component, PropTypes } from 'react';

import { put, get } from '../../utils/db';

import Register from './RegisterForm';

import './LoginPage.css';

export default class LoginPage extends Component {
	static propTypes = {
		logIn: PropTypes.func
	}

	state = {
		showSingUp: false,
		username: 'test1',
		password: 'qwerty123'
	}

	changeUsername = (e) => {
		this.setState({ username: e.target.value });
	}

	changePassword = (e) => {
		this.setState({ password: e.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault()

		const { username, password } = this.state;

		this.props.logIn(username, password);
	}

	handleSingUp = () => {
		this.setState({ showSingUp: true });
	}

	render() {
		const { showSingUp, username, password } = this.state;

		return (
			<div className='container'>
				{!showSingUp
					? (<div className='loginForm'>
						<form className='form' onSubmit={this.onSubmit}>
							{this.state.error ? 'error' : null}
							<div className='form__field-wrapper'>
								<input
									className='form__field-input'
									type='text'
									id='username'
									value={username}
									placeholder='frank.underwood'
									onChange={this.changeUsername}
									autoCorrect='off'
									autoCapitalize='off'
									spellCheck='false' />
								<label className='form__field-label' htmlFor='username'>
									Username
								</label>
							</div>
							<div className='form__field-wrapper'>
								<input
									className='form__field-input'
									id='password'
									type='password'
									value={password}
									placeholder='••••••••••'
									onChange={this.changePassword} />
								<label className='form__field-label' htmlFor='password'>
									Password
								</label>
							</div>
							<div className='form__submit-btn-wrapper'>
								{this.props.currentlySending
									? 'some_spiner'
									: (
										<button className='loginButton' type='submit'>
											Sing In
										</button>
									)}
							</div>
						</form>
						<button className='loginButton' type='button' onClick={this.handleSingUp}>
							Sing Up
						</button>
					</div>)
					: <Register />}
            </div>
		);
	}
}
