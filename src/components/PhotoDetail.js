import React from 'react';
import Comments from "./Comments";


const PhotoDetail = (props) => {
  const {match, posts} = props;
  const id = Number(match.params.id);
  const post = posts.find((post) => post.id === id);

  return (
    <div className="row mt-4">
      <div className="col-12 col-md-8 px-0">
        <div className="card mb-3">
          <img className="card-img-top custom--comments border-bottom" src={post.imageLink} alt="ownPicture"/>
          <div className="card-body">
            <p className="card-text">{post.description}</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 pr-sm-0 pr-3">
        <Comments addComment={props.addComment}/>
      </div>
    </div>
  )
};

export default PhotoDetail;