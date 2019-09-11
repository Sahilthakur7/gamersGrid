import update from 'immutability-helper';

export const GAME_CREATED = 'GAME_CREATED';
export const GAME_CREATION_FAILED = 'GAME_CREATION_FAILED';
export const GAMES_FETCHED = 'GAMES_FETCHED';
export const GAMES_FETCHED_FAILED = 'GAMES_FETCHED_FAILED';


const INITIAL_STATE ={
    game: {
        title: '',
        genre: '',
    },
    games: [],
    message: '',
    error: ''
};

export default function(state = INITIAL_STATE , action){
    const {payload} = action;
    let stateUpdateObj;

    switch(action.type){
        case GAME_CREATED:
             stateUpdateObj = {
                game: {
                    ...payload.data
                },
                 message: "Your game has been created"
            };

            return update(state, {$set: stateUpdateObj});

        case GAME_CREATION_FAILED:
             stateUpdateObj = {
                error: {
                    $set : payload.data
                }
            }

            return update(state,stateUpdateObj);
        default:
            return state;

        case GAMES_FETCHED :
            stateUpdateObj = {
                games: {
                    $set : payload.data
                }
            }
    }
}
