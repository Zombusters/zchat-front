import { combineReducers } from 'redux';

import session from './session.js';
import chat from './chat.js';
import profile from './profile.js';

const rootReducer = combineReducers({
    session,
    chat,
    profile
});

export default rootReducer;
