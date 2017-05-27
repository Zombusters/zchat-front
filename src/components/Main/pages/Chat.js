import React, { Component, PropTypes } from 'react';

import Messages from './Chat/Messages';

import './Chat.css';

export default class Chat extends Component {
	static propTypes = {
		logIn: PropTypes.func,
		getMessages: PropTypes.func,
		contact: PropTypes.array,
	}

	state = {
		withName: null,
		contacts: this.props.contacts || []
	}

	renderContacts = () => {
		const { contacts, withName } = this.state;

		return contacts.length > 0
			? contacts.map(contact => (
				<div className='contact' />
			))
			: 'you need new to add';
	}

	render() {
		const { contacts, withName } = this.state;

		return (
			<section className='container'>
                <div className='contacts'>
					{this.renderContacts()}
				</div>

				<div className='chat'>
					{withName
						? <Messages withName={withName} getMessages={this.props.getMessages} />
						: 'choose someone to chat with'}
				</div>
            </section>
		);
	}
}
