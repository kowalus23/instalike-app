export const removePost = (posts) => {
  return {
    type: 'REMOVE_POST',
    payload: posts
  }
};