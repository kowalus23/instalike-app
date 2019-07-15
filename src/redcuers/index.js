import {combineReducers} from 'redux';

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT ':
      if (!state[action.payload.postId]) {
        return {...state, [action.payload.postId]: [action.payload.comments]};
      } else {
        return {...state, [action.payload.postId]: [action.payload.comments, ...state[action.payload.postId]]}
      }
    case 'LOAD_COMMENTS':
      return action.payload;
    default:
      return state
  }
};

const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case 'ADD_POST':
      return [action.payload, ...state];
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

