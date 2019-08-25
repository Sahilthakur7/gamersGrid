import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
    games: gamesReducer,
    toastr: toastrReducer
});
