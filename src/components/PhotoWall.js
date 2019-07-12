import React from 'react';
import Photo from './Photo'

const PhotoWall = ({posts, onRemovePhoto}) => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-dark custom">+</button>
      </div>
      <div className="d-flex justify-content-center flex-wrap pt-5">
        {posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={onRemovePhoto}/>)}
      </div>
    </div>
  );
};

export default PhotoWall;