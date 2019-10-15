import {
    authenticateUser,
    logoutUser
} from '../services/userService';

import {
    AUTHENTICATED_USER,
    AUTHENTICATED_USER_FAILED,
    CLEAR_ERRORS,
    LOGGED_OUT,
    LOGOUT_FAILED
} from '../reducers/usersReducer';

export const authenticate = (user) => (dispatch) => {
    return authenticateUser(user).then(res => {
        dispatch({
            type: AUTHENTICATED_USER,
            payload: res
        });

    }).catch((err) => {
        dispatch({
            type: AUTHENTICATED_USER_FAILED,
            payload: err
        })
    })
};

export const logout = () => dispatch => {
    return logoutUser().then(res => {
        dispatch({
            type: LOGGED_OUT,
            payload: res
        });
    }).catch(err => {
        dispatch({
            type: LOGOUT_FAILED,
        });
    })
}

export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
};
