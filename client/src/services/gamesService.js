import axios from 'axios';

export const createGame = (game) => {
    axios.post('/api/games/create', game);
}
