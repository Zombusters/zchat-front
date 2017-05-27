import React, { Component, PropTypes } from 'react';

export default class Chat extends Component {
	static propTypes = {
		withName: PropTypes.string,
        messages: PropTypes.array,
        getMessages: PropTypes.func
	}

    state = {
        messages: this.props.messages || [],
        isReady: false
    }

    async componentWillMount() {
        // await this.props.getMessages(this.props.withName);

        this.setState({ isReady: true });
    }

    renderMessages = () => {
        const { messages } = this.state;

        return messages.length > 0
            ? messages.map(message => {
                <div className='message'>
                    {message}
                </div>
            })
            : `no messages with ${this.props.withName || 'this person'}`
    }

	render() {
        const { isReady } = this.state;

		return (
			<div className='container'>
                {isReady
                    ? this.renderMessages()
                    : 'loading..'}
            </div>
		);
	}
}
