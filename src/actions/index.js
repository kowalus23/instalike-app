import {database} from "../database/config";
import {ADD_COMMENT, ADD_POST, LOAD_COMMENTS, LOAD_POSTS, REMOVE_POST} from "./types";

export const startAddingPost = (post) => async dispatch => {
  await database.ref('posts').update({[post.id]: post});

  dispatch({
    type: ADD_POST,
    payload: post
  });
};

export const startLoadingPosts = () => async dispatch => {
  await database.ref('posts').once('value').then((snapshot) => {
    let posts = [];
    snapshot.forEach((childSnapshot) => {
      posts.push(childSnapshot.val())
    });
    dispatch({
      type: LOAD_POSTS,
      payload: posts
    })
  })
};

export const startRemovingPost = (index, id) => async dispatch => {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null
  };
  await database.ref().update(updates);

  dispatch({
    type: REMOVE_POST,
    payload: index
  })
};

export const startAddingComment = (comment, postId) => async dispatch => {
  await database.ref(`comments/${postId}`).push(comment);

  dispatch({
    type: ADD_COMMENT,
    payload: {
      comment,
      postId
    }
  })
};

export const startLoadingComments = () => async dispatch => {
  await database.ref(`comments`).once('value').then((snapshot) => {
    let comments = {};
    snapshot.forEach((childSnapshot) => {
      comments[childSnapshot.key] = Object.values(childSnapshot.val())
    });
    dispatch({
      type: LOAD_COMMENTS,
      payload: comments
    })
  })
};