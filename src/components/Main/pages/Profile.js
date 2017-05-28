import React, { Component } from 'react';

import './Profile.css';

export default class Profile extends Component {
	render() {
		return (
			<div>
                {`Profile Options:`}
				<hr />
                {`Username: ${this.props.username}`}
				<hr />
                {`email: ${this.props.email}`}
            </div>
		);
	}
}
