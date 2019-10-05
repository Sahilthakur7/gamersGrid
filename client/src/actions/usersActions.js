import {
    authenticateUser
} from '../services/userService';

import {
    AUTHENTICATED_USER,
    AUTHENTICATED_USER_FAILED
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
}
