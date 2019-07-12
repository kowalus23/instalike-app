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