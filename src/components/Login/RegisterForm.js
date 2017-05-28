import React, { Component, PropTypes } from 'react';
import LIVR                            from 'livr';

import './RegisterForm.css';

const validator = new LIVR.Validator({
    password: ['required', 'not_empty'],
    rePassword: ['required', 'not_empty'],
    email: ['required', 'not_empty', 'email'],
    username: ['required', 'not_empty']
});

export default class RegisterForm extends Component {
	static propTypes = {
		register: PropTypes.func
	}

    state = {
		first_name: '',
		last_name: '',
        username: '',
        email: '',
        password: '',
        rePassword: '',
        error: null
	}

    changeInput = (type, e) => {
        this.setState({ [type]: e.target.value });
    } 

    onSubmit = (e) => {
        e.preventDefault();

        const { first_name, last_name, username, email, password, rePassword } = this.state;

         if (!validator.validate({ username, email, password, rePassword })) {
            const error = validator.getErrors();

            if (error.email === 'WRONG_EMAIL') this.setState({ error: 'email is invalid' });
            else this.setState({ error: 'fill all fields' });

            return;
        } else if (password !== rePassword) this.setState({ error: `rePassword !== password` });

        this.props.register({ first_name, last_name, username, email, password, rePassword });
    }

	render() {
		const { first_name, last_name, username, email, password, rePassword } = this.state;

		return (
			<div className='container'>
				<div className='loginForm'>
                    <form className='form' onSubmit={this.onSubmit}>
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                type='text'
                                id='first_name'
                                value={first_name}
                                placeholder='Your first name'
                                onChange={this.changeInput.bind(this, 'first_name')}
                                autoCorrect='off'
                                autoCapitalize='off'
                                spellCheck='false' />
                            <label className='form__field-label' htmlFor='first_name'>
                                First Name
                            </label>
                        </div>
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                type='text'
                                id='last_name'
                                value={last_name}
                                placeholder='Your last name'
                                onChange={this.changeInput.bind(this, 'last_name')}
                                autoCorrect='off'
                                autoCapitalize='off'
                                spellCheck='false' />
                            <label className='form__field-label' htmlFor='last_name'>
                                Last Name
                            </label>
                        </div>
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                type='text'
                                id='username'
                                value={username}
                                placeholder='Your username'
                                onChange={this.changeInput.bind(this, 'username')}
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
                                id='email'
                                value={email}
                                placeholder='email@omg.com'
                                onChange={this.changeInput.bind(this, 'email')}
                                autoCorrect='off'
                                autoCapitalize='off'
                                spellCheck='false' />
                            <label className='form__field-label' htmlFor='email'>
                                Email
                            </label>
                        </div>
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                id='password'
                                type='password'
                                value={password}
                                placeholder='••••••••••'
                                onChange={this.changeInput.bind(this, 'password')} />
                            <label className='form__field-label' htmlFor='password'>
                                Password
                            </label>
                        </div>
                        <div className='form__field-wrapper'>
                            <input
                                className='form__field-input'
                                id='rePassword'
                                type='password'
                                value={rePassword}
                                placeholder='••••••••••'
                                onChange={this.changeInput.bind(this, 'rePassword')} />
                            <label className='form__field-label' htmlFor='rePassword'>
                                Repeat Password
                            </label>
                        </div>
                        {this.state.error || null}
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
