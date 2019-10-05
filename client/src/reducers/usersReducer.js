export const AUTHENTICATED_USER = 'AUTHENTICATED_USER';
export const AUTHENTICATED_USER_FAILED = 'AUTHENTICATED_USER_FAILED';

const INITIAL_STATE = {
    user: {

    },
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
                message: 'You have logged In'
            }
    };
}
