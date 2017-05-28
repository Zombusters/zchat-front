import React, { Component, PropTypes } from 'react';

export default class Chat extends Component {
	static propTypes = {
		withName: PropTypes.string,
        messages: PropTypes.array,
        sendMessage: PropTypes.func
	}

    state = {
        messages: this.props.messages || [],
        isReady: true,
        message: ''
    }

    async componentWillMount() {
        // await this.props.getMessages(this.props.withName);

        this.setState({ isReady: true });
    }

    renderMessages = () => {
        const { messages } = this.state;
        console.log('MESSAGE', messages)

        return messages.length > 0
            ? messages.map(message => 
                <div className='message'>
                    {JSON.stringify(message.msg)}
                </div>
            )
            : `no messages with ${this.props.withName || 'this person'}`
    }

    onSend = (e) => {
        e.preventDefault();

        this.props.sendMessage(this.state.message);
    }

    handleInput = (e) => {
        this.setState({ message: e.target.value });
    }

	render() {
        const { isReady } = this.state;

		return (
			<div className='container'>
                {isReady
                    ? this.renderMessages()
                    : 'loading..'}
                <div className='input'>
                    <input type='text' onChange={this.handleInput} value={this.state.message} placeholder='Type..' />
                    <button type='button' onClick={this.onSend}>Send</button>
                </div>
            </div>
		);
	}
}
