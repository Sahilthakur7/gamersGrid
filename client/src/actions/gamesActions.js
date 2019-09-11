import {
    createGame,
    fetchGames
} from '../services/gamesService';
import {
    GAME_CREATED,
    GAME_CREATION_FAILED,
    GAMES_FETCHED,
    GAMES_FETCHED_FAILED
} from '../reducers/gamesReducer';

export const saveGame = (game) => (dispatch) => {
    return createGame(game).then(res => {
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

export const fetchAllGames = () => (dispatch) => {
    return fetchGames().then(res => {
        console.log("response is " ,res);
        dispatch({
            type: GAMES_FETCHED,
            payload: res
        })
    }).catch(err => {
        dispatch({
            type: GAMES_FETCHED_FAILED,
            payload: err
        })
    });
}
