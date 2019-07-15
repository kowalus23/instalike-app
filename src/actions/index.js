export const removePost = (posts) => {
  return {
    type: 'REMOVE_POST',
    payload: posts
  }
};

export const addPost = (id, description, imageLink) => {
  return {
    type: 'ADD_POST',
    payload: {
      id,
      description,
      imageLink,
    }

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