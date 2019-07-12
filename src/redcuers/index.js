import { combineReducers } from 'redux';
import postReducer from './reducerPost'

export default combineReducers({
    posts: postReducer,
});