import React, { Component, PropTypes } from 'react';

import Messages from './Chat/Messages';

import './Chat.css';

export default class Chat extends Component {
	static propTypes = {
		logIn: PropTypes.func,
		sendMessage: PropTypes.func,
		contact: PropTypes.array,
	}

	state = {
		withName: null,
		contacts: this.props.contacts || []
	}

	render() {
		const { contacts, withName } = this.state;

		return (
			<section className='container'>
				<div className='chat'>
					{!withName
						? <Messages messages={this.props.messages.results} sendMessage={this.props.sendMessage} />
						: 'choose someone to chat with'}
				</div>
            </section>
		);
	}
}
