import React from 'react';
import './PhotoDetail.css'

const PhotoDetail = (props) => {
  const {match, posts} = props;
  const id = Number(match.params.id);
  const post = posts.find((post) => post.id === id);

  return (
    <h1>
      Photo Detail
    </h1>
  )
};

export default PhotoDetail;