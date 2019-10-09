import {
    authenticateUser
} from '../services/userService';

import {
    AUTHENTICATED_USER,
    AUTHENTICATED_USER_FAILED,
    CLEAR_ERRORS
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

export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
