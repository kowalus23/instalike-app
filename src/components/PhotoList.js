import React from 'react';
import PhotoCard from './PhotoCard'
import {Link} from "react-router-dom";

const PhotoList = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Link className="btn btn-dark custom" to={'create'}>+</Link>
      </div>
      <div className="d-flex justify-content-center flex-wrap pt-5">
        {
          props.posts
            .sort((x, y) => y.id - x.id)
            .map((post, index) =>
              <PhotoCard
                key={index}
                post={post}
                {...props}
                index={index}
              />)
        }
      </div>
    </div>
  );
};

export default PhotoList;