import update from 'immutability-helper';

export const GAME_CREATED = 'GAME_CREATED';


const INITIAL_STATE ={
    game: {
        title: '',
        genre: ''
    }
};

export default function(state = INITIAL_STATE , action){
    const {payload} = action;

    switch(action.type){
        case GAME_CREATED:
            const stateUpdateObj = {
                game: {
                    $set: payload
                }
            };

            return update(state, stateUpdateObj);
    }
}
