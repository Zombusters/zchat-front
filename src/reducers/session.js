import { LOG_IN_SUCCESS, LOG_IN_FAILED } from '../actions/SessionActions.js';

export default function data(state = {}, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return { ...state, ...action };
        case LOG_IN_FAILED:
            return { ...action };
        default:
            return state;
    }
}
