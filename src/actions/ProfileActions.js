import { put, get } from '../utils/db';

import api from '../apiSingleton.js';

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';

export function getProfile() {
    return async dispatch => {
        try {
            //const data = await get('messages');

            const data = await api.profile.getProfile();

            console.log('messages', data)

            dispatch({
                type: GET_PROFILE_SUCCESS,
                data
            });
        } catch(err) {
            console.log('err_mess', err);
        }
    };
}
