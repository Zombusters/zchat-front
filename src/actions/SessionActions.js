import { decodeToken } from 'jwt-js';
import { put, get, del } from '../utils/db';
import { getMessages } from './ChatActions';
import { getProfile } from './ProfileActions';

import api from '../apiSingleton.js';

export const LOG_OUT        = 'LOG_OUT';
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

            //await put({ token: data.token }, 'token');

            //const token1 = await get('acces_token');

           // console.log('wtf', token1)

            await dispatch({
                type: LOG_IN_SUCCESS
            });

            await dispatch(getMessages());
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

            const { email } = decodeToken(data.token).payload;

            await dispatch(getProfile({ username, email }));

            await put({ token: data.token }, 'token');

            await dispatch(getMessages());

            dispatch({
                type: LOG_IN_SUCCESS
            });

            console.log('loged in')
        } catch(err) {
            console.log('err', err);
        }
    };
}

export function register(params) {
    return async dispatch => {
        try {
            console.log('params', params)
            await api.session.register(params);

            dispatch({
                type: REGISTER_SUCCESS
            });

            console.log('registered')
        } catch(err) {
            console.log('err', err);
        }
    };
}

export function rem(id) {
    return async dispatch => {
        try {
            await api.apiClient.setAuthToken()
            await dispatch({
                type: LOG_OUT
            });
            await del(id);

            console.log('deleted')
        } catch(err) {
            console.log('err', err);
        }
    };
}
