import { LOG_IN_SUCCESS, LOG_IN_FAILED, LOG_OUT } from '../actions/SessionActions.js';

export default function data(state = {}, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return { token: true };
        case LOG_IN_FAILED:
            return { ...action };
        case LOG_OUT:
            return { token: false };
        default:
            return state;
    }
}
