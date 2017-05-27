import React, { Component, PropTypes } from 'react';

import './RegisterForm.css';

export default class RegisterForm extends Component {
	static propTypes = {
		register: PropTypes.func
	}

    state = {
		username: '',
		password: ''
	}

    onSubmit = (e) => {
        e.prevenDefault();

        this.props.register();
    }

	render() {
		const { showSingUp, username, password } = this.state;

		return (
			<div className='container'>
				<div className='loginForm'>
                    <form className='form' onSubmit={this.onSubmit}>
                        {this.state.error ? 'error' : null}
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                type='text'
                                id='username'
                                value={username}
                                placeholder='some name'
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
                                type='text'
                                id='age'
                                value={username}
                                placeholder='your age'
                                onChange={this.changeAge}
                                autoCorrect='off'
                                autoCapitalize='off'
                                spellCheck='false' />
                            <label className='form__field-label' htmlFor='age'>
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
                                        Register
                                    </button>
                                )}
                        </div>
                    </form>
                </div>
            </div>
		);
	}
}
