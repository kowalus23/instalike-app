import {database} from "../database/config";

export const startAddingPost = (post) => dispatch => {
  database.ref('posts').update({[post.id]: post}).then(() => {
    dispatch(addPost(post));
  });
};

export const startLoadingPost = () => dispatch => {
  database.ref('posts').once('value').then((snapshot) => {
    let posts = [];
    snapshot.forEach((childSnapshot) => {
      posts.push(childSnapshot.val())
    });
    dispatch(loadPosts(posts))
  })
};

export const removePost = (posts) => {
  return {
    type: 'REMOVE_POST',
    payload: posts
  }
};

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    payload: post

  };
};

export const addComment = (comment, postId) => {
  return {
    type: 'ADD_COMMENT',
    payload: {
      comment,
      postId
    }
  };
};

export const loadPosts = (postReducer) => {
  return {
    type: 'LOAD_POSTS',
    payload: postReducer
  }
};