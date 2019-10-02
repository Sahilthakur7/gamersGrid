import {
    authenticateUser
} from '../services/userService';

import {
    AUTHENTICATED_USER
} from '../reducers/usersReducer';

export const authenticate = (user) => (dispatch) => {
    return authenticateUser(user).then(res => {
        console.log(res);
    })
}
