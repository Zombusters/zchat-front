import { connect } from 'react-redux';

import MainPage from '../components/MainPage.js';

import * as SessionActions from '../actions/SessionActions.js';

function mapStateToProps(state) {
    console.log('container', state.session.token)
    return {
        token: state.session.token
    };
}

export default connect(mapStateToProps, { ...SessionActions })(MainPage);
