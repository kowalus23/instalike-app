import React from 'react';
import Comments from "./Comments";
import {Link} from "react-router-dom";
import {imagePlaceholder} from './PhotoCard'


const PhotoDetail = (props) => {
    const {match, posts} = props;
    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id);
    const comments = props.comments[match.params.id] || [];

    const loading = (exist) => {
      return (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="loader-post"/>
          <p className="mt-5">{exist}</p>
        </div>
      )
    };

    if (props.loading === true) {
      return loading();
    } else if (post) {
      return (
        <React.Fragment>
          <Link className="return-button btn btn-primary" to={'/'}><i className="fas fa-arrow-left "/></Link>
          <div className="row mt-3">
            <div className="col-12 col-md-8 px-sm-0 px-3">
              <div className="card mb-3">
                <img className="card-img-top custom--comments border-bottom"
                     src={post.imageLink.indexOf('http') ? imagePlaceholder : post.imageLink}
                     alt="ownPicture"/>
                <div className="card-body">
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 pr-sm-0 pr-3">
              <Comments startAddingComment={props.startAddingComment} comments={comments} id={id}/>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return loading('This page does not exist!')
    }
  }
;

export default PhotoDetail;