import { connect } from 'react-redux';

import Profile from '../../components/Main/pages/Profile.js';

import * as ProfileActions from '../../actions/ProfileActions.js';

function mapStateToProps(state) {
    console.log('STATEEEEEE', state.profile.username)
    return {
        username: state.profile.username,
        email: state.profile.email
    };
}

export default connect(mapStateToProps, { ...ProfileActions })(Profile);
