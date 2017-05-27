import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MapPage from '../../containers/pages/MapContainer.js';
import Chat from '../../containers/pages/ChatContainer.js';
import Profile from '../../containers/pages/ProfileContainer.js';

export default class Main extends Component {
	render() {
		return (
			<Router>
                <div>
                    <ul>
                        <li><Link to="/">Chat</Link></li>
                        <li><Link to="/map">Map</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Chat}/>
                    <Route exact path="/map" component={MapPage}/>
                    <Route exact path="/profile" component={Profile}/>
                </div>
            </Router>
		);
	}
}
