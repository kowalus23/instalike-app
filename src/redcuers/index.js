import { combineReducers } from 'redux';
import {dataPost} from '../data/posts'


const postReducer = (state = dataPost, action) => {
  return state
};

export default combineReducers({
    posts: postReducer,
});

