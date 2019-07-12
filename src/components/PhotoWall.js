import React from 'react';
import Photo from './Photo'

const PhotoWall = ({posts}) => {
  return (
    <div className="d-flex justify-content-center flex-wrap pt-5">
      {posts.map((post, index) => <Photo key={index} post={post}/>)}
    </div>
  );
};

export default PhotoWall;