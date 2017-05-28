import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { del } from '../../utils/db';

import MapPage from '../../containers/pages/MapContainer.js';
import Chat from '../../containers/pages/ChatContainer.js';
import Profile from '../../containers/pages/ProfileContainer.js';

export default class Main extends Component {
    handleSingOut = () => {
        this.props.rem('token');
    }

	render() {
		return (
			<Router>
                <div>
                    <ul>
                        <li><Link to="/">Chat</Link></li>
                        <li><Link to="/map">Map</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>

                    <button type='button' onClick={this.handleSingOut}>Log Out</button>

                    <hr/>

                    <Route exact path="/" component={Chat}/>
                    <Route exact path="/map" component={MapPage}/>
                    <Route exact path="/profile" component={Profile}/>
                </div>
            </Router>
		);
	}
}
