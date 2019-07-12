import { combineReducers } from 'redux';
import {dataPost} from '../data/posts'


const postReducer = (state = dataPost, action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state
  }
};

export default combineReducers({
    posts: postReducer,
});

