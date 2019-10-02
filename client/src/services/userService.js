import axios from 'axios';

export const authenticateUser = (user) => {
    return axios.post('/api/authenticate', user);
};
