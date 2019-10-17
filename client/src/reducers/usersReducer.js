import update from 'immutability-helper';
export const AUTHENTICATED_USER = 'AUTHENTICATED_USER';
export const AUTHENTICATED_USER_FAILED = 'AUTHENTICATED_USER_FAILED';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

const INITIAL_STATE = {
    user: {

    },
    loggedIn: false,
    message:'',
    error: ''
};

export default function(state = INITIAL_STATE,action){
    const {payload} = action;
    let stateUpdatedObj;
    switch(action.type){
        case AUTHENTICATED_USER:
            stateUpdatedObj = {
                user: {
                    ...payload.data
                },
                message: 'You have successfully logged In'
            }

            return update(state, {$set: stateUpdatedObj});

        case AUTHENTICATED_USER_FAILED:
            stateUpdatedObj = {
                error: payload.response.data.error
            }

            return update(state, {$set: stateUpdatedObj});

        case CLEAR_ERRORS:
            stateUpdatedObj = {
                ...state,
                error: ''
            };

            return update(state,{$set: stateUpdatedObj});
        case LOGGED_OUT:
            stateUpdatedObj = {
                ...state,
                loggedIn: false,
                message: 'You have been logged out'
            };

            return update(state,{$set: stateUpdatedObj});
        default:
            return state;
    };
}
