import React from 'react';
import Comments from "./Comments";


const PhotoDetail = (props) => {
  const {match, posts} = props;
  const id = Number(match.params.id);
  const post = posts.find((post) => post.id === id);
  const comments = props.comments[match.params.id] || [];

  return (
    <div className="row mt-3">
      <div className="col-12 col-md-8 px-0">
        <div className="card mb-3">
          <img className="card-img-top custom--comments border-bottom" src={post.imageLink} alt="ownPicture"/>
          <div className="card-body">
            <p className="card-text">{post.description}</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 pr-sm-0 pr-3">
        <Comments startAddingComment={props.startAddingComment} comments={comments} id={id}/>
      </div>
    </div>
  )
};

export default PhotoDetail;