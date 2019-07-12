import React from 'react';

const Photo = (props) => {
  return (
    <div className="card mx-3 mb-4">
      <img className="card-img-top" src={props.post.imageLink} alt="ownPicture"/>
      <div className="card-body">
        <p className="card-text">{props.post.description}</p>
        <button
          onClick={() => {
            props.removePost(1)
          }}
          className="btn btn-outline-danger">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Photo