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
        message: '',
        me: this.props.username
    }

    async componentWillMount() {
        // await this.props.getMessages(this.props.withName);

        this.setState({ isReady: true });
    }

    renderMessages = () => {
        const { messages, me } = this.state;

        return messages.length > 0
            ? messages.map(message => {
                const isMe = message.author.username === me;
                return (
                    <div style={{ width: '600px', textAlign: isMe ? 'right' : 'left', padding: 5 }}>
                        {!isMe ? `${message.author.username}: ` : 'Me: '}
                        {JSON.stringify(message.msg)}
                    </div>
                )
            }
            )
            : `no messages with ${this.props.withName || 'this person'}`
    }

    onSend = (e) => {
        e.preventDefault();

        const { message, me } = this.state;

        this.props.sendMessage(message);
        this.setState({ messages: this.state.messages.concat({ author: { username: me }, msg: message }), message: '' })
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
