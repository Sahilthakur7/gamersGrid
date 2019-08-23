import {
    createGame
} from '../services/gamesService';
import {
    GAME_CREATED
} from '../reducers/gamesReducer';

export const saveGame = (game) => (dispatch) => {
    return createGame(game).then(res => {
        dispatch({
            type: GAME_CREATED,
            payload: res
        })
    });
}
