import { put, get } from '../utils/db';
import { getMessages } from './ChatActions';

import api from '../apiSingleton.js';

export const LOG_IN        = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function checkToken() {
    return async dispatch => {
        try {
            const token = await get('token');
            console.log('token', token)

            const data = await api.session.verifyToken({
                token: token.token
            });

            if (data.non_field_errors) {
                throw new Error('err');
            }

            await dispatch(getMessages());

            //await put({ token: data.token }, 'token');

            //const token1 = await get('acces_token');

           // console.log('wtf', token1)

            dispatch({
                type: LOG_IN_SUCCESS,
                token
            });
        } catch(err) {
            dispatch({
                type: LOG_IN_FAILED,
                err
            });
            console.log('err', err);
        }
    };
}

export function logIn(username, password) {
    return async dispatch => {
        try {
            const data = await api.session.set({
                username,
                password
            });

            await put({ token: data.token }, 'token');

            dispatch({
                type: LOG_IN_SUCCESS,
                token: data.token
            });

            console.log('loged in')
        } catch(err) {
            console.log('err', err);
        }
    };
}

export function register(username, password) {
    return async dispatch => {
        try {
            await put({ username, password }, 'test');

            const data = await get('test');

            dispatch({
                type: REGISTER_SUCCESS
            });

            console.log('loged in')
        } catch(err) {
            console.log('err', err);
        }
    };
}
