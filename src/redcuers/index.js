import {combineReducers} from 'redux';
import {dataPost} from '../data/posts'

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      if (!state[action.payload.postId]) {
        return {...state, [action.payload.postId]: [action.payload.comment]};
      } else {
        return {...state, [action.payload.postId]: [action.payload.comment, ...state[action.payload.postId]]}
      }
    default:
      return state
  }
};

const postReducer = (state = dataPost, action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case 'ADD_POST':
      return [
        {
          "id": action.payload.id,
          "description": action.payload.description,
          "imageLink": action.payload.imageLink
        }
        , ...state
      ];
    case 'LOAD_POSTS':
      return action.payload;
    default:
      return state
  }
};

export default combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

