import { put, get } from '../utils/db';
import { rem } from './SessionActions';

import api from '../apiSingleton.js';

export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAILED = 'GET_MESSAGES_FAILED';
export const SEND_MESSAGES_SUCCESS = 'SEND_MESSAGES_SUCCESS'

export function getMessages() {
    return async dispatch => {
        try {
            //const data = await get('messages');

            const data = await api.messages.getMessages();

            if (data.detail) {
                await dispatch(rem('token'));
                throw new Error();
            }

            dispatch({
                type: GET_MESSAGES_SUCCESS,
                data
            });
        } catch(err) {
            console.log('err_mess', err);
        }
    };
}

export function sendMessage(message) {
    return async dispatch => {
        try {
            const data = await api.messages.sendMessage(message);

            console.log('messsssssssss', data)

            dispatch({
                type: SEND_MESSAGES_SUCCESS
            });
        } catch(err) {
            console.log('err_mess', err);
        }
    };
}
