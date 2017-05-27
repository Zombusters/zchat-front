import { LOG_IN } from '../actions/SessionActions.js';

export default function data(state = {}, action) {
    switch (action.type) {
        case LOG_IN:
            return { ...state };
        default:
            return state;
    }
}
