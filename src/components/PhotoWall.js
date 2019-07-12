import React from 'react';
import Photo from './Photo'
import {Link} from "react-router-dom";

const PhotoWall = ({posts, onRemovePhoto}) => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Link className="btn btn-dark custom" to={'/AddPhoto'}>+</Link>
      </div>
      <div className="d-flex justify-content-center flex-wrap pt-5">
        {
          posts
            .sort((x, y) => y.id - x.id)
            .map((post, index) => <Photo key={index} post={post} onRemovePhoto={onRemovePhoto}/>)
        }
      </div>
    </div>
  );
};

export default PhotoWall;