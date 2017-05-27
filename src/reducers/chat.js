import { GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILED } from '../actions/ChatActions.js';

export default function data(state = {}, action) {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return { ...state, ...action };
        case GET_MESSAGES_FAILED:
            return { ...action };
        default:
            return state;
    }
}
