import {database} from "../database/config";

export const startAddingPost = (post) => async dispatch => {
  await database.ref('posts').update({[post.id]: post});

  dispatch({
    type: 'ADD_POST',
    payload: post
  });
};

export const startLoadingPosts = () => async dispatch => {
  await database.ref('posts').once('value').then((snapshot) => {
    let posts = [];
    snapshot.forEach((childSnapshot) => {
      posts.push(childSnapshot.val())
    });
    dispatch(loadPosts(posts))
  })
};

export const startRemovingPost = (index, id) => async dispatch => {
  await database.ref(`posts/${id}`).remove();

  dispatch({
    type: 'REMOVE_POST',
    payload: index
  })
};

export const startAddingComment = (comment, postId) => async dispatch => {
  await database.ref(`comments/${postId}`).push(comment);

  dispatch({
    type: 'ADD_COMMENT',
    payload: {
      comment,
      postId
    }
  })
};

export const startLoadingComments = () => async dispatch => {
  await database.ref('comments').once('value').then((snapshot) => {
    let comments = {};
    snapshot.forEach((childSnapshot) => {
      comments[childSnapshot.key] = Object.values(childSnapshot.val())
    });
    dispatch(loadComments(comments))
  })
};

export const loadPosts = (postReducer) => {
  return {
    type: 'LOAD_POSTS',
    payload: postReducer
  }
};

export const loadComments = (commentReducer) => {
  return {
    type: 'LOAD_COMMENTS',
    payload: commentReducer
  }
};