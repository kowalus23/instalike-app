import React from 'react';
import '../styles/components/PhotoDetail.css'
import Comments from "./Comments";


const PhotoDetail = (props) => {
  const {match, posts} = props;
  const id = Number(match.params.id);
  const post = posts.find((post) => post.id === id);

  return (
    <div className="row mt-4 p-3 border">
      <div className="col-12 col-md-8 px-0">
        <div className="card">
          <img className="card-img-top" src={post.imageLink} alt="ownPicture"/>
          <div className="card-body">
            <p className="card-text">{post.description}</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 pr-0">
        <Comments/>
      </div>
    </div>
  )
};

export default PhotoDetail;