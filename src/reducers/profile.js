import { GET_PROFILE_SUCCESS } from '../actions/ProfileActions.js';

export default function data(state = {}, action) {
    switch (action.type) {
        case GET_PROFILE_SUCCESS:
            return { ...state, ...action };
        default:
            return state;
    }
}
