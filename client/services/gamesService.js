import axios from 'axios';

export default{
    createGame(game){
        return axios.post('api/games/create');
    }
}