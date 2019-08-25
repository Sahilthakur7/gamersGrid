import {
    createGame
} from '../services/gamesService';
import {
    GAME_CREATED,
    GAME_CREATION_FAILED
} from '../reducers/gamesReducer';

export const saveGame = (game) => (dispatch) => {
    return createGame(game).then(res => {
        console.log("lets return res",res);
        dispatch({
            type: GAME_CREATED,
            payload: res
        })
    }).catch(err => {
        dispatch({
            type: GAME_CREATION_FAILED,
            payload: err
        })
    });
}
