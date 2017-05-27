import { combineReducers } from 'redux';

import session from './session.js';
import chat from './chat.js';

const rootReducer = combineReducers({
    session,
    chat
});

export default rootReducer;
