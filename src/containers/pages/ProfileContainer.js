import { connect } from 'react-redux';

import Profile from '../../components/Main/pages/Profile.js';

import * as ProfileActions from '../../actions/ProfileActions.js';

function mapStateToProps(state) {
    return {
        profile: state.profile.data
    };
}

export default connect(mapStateToProps, { ...ProfileActions })(Profile);
