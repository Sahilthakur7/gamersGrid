import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import usersReducer from './usersReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
    games: gamesReducer,
    user: usersReducer,
    toastr: toastrReducer
});
