import { connect } from 'react-redux';

import Chat from '../../components/Main/pages/Chat.js';

import * as ChatActions from '../../actions/ChatActions.js';

function mapStateToProps(state) {
    return {
        messages: state.chat.data
    };
}

export default connect(mapStateToProps, { ...ChatActions })(Chat);
