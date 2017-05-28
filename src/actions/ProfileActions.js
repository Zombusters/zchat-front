export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';

export function getProfile(profile) {
    return dispatch => 
        dispatch({
            type: GET_PROFILE_SUCCESS,
            ...profile
        });
}
