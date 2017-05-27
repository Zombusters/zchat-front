import { put, get } from '../utils/db';

export const LOG_IN        = 'LOG_IN';
export const LOG_IN_SUCCES = 'LOG_IN_SUCCES';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function logIn(username, password) {
    return async dispatch => {
        try {
            await put({ username, password }, 'test');

            const data = await get('test');

            dispatch({
                type: LOG_IN
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
