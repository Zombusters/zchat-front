export const LOG_IN        = 'LOG_IN';
export const LOG_IN_SUCCES = 'LOG_IN_SUCCES';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';

export function logIn() {
    return dispatch => {
        try {
            dispatch({
                type: LOG_IN
            });

            console.log('loged in')
        } catch(err) {
            console.log('err', err);
        }
    };
}
