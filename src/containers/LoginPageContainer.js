import { connect } from 'react-redux';

import LoginPage from '../components/Login/LoginPage.js';

import * as SessionActions from '../actions/SessionActions.js';

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, { ...SessionActions })(LoginPage);
