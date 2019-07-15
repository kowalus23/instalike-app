import React, {useState} from 'react';
import {Link} from "react-router-dom";

const PhotoCard = ({post, removePost, index, comments}) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const cardStyle = {
    hover: {
      borderColor: '#ff4d5d',
      boxShadow: '0 0.225rem 0.35rem rgba(255, 0, 0, 0.175)'
    }
  };

  const imagePlaceholder = 'http://www.stuartsteel.com/wp-content/themes/asenka/images/default-no-image.png';

  return (
    <div className="card custom mx-3 mb-4" style={hover ? cardStyle.hover : null}>
      <div className="card-img-top border-bottom custom">
        <Link to={`photo/${post.id}`}>
          <img
            className="img-fluid-custom"
            src={post.imageLink.indexOf('http') ? imagePlaceholder : post.imageLink}
            alt="ownPicture"/>
        </Link>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between position-relative">
          <p className="card-text mb-0">{post.description}</p>
          <Link className="custom--card-content" to={`photo/${post.id}`}>
              <i className="far fa-comment"/> <span>{comments[post.id] ? comments[post.id].length  : 0}</span>
          </Link>
        </div>
        <button
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onClick={() => {
            removePost(index)
          }}
          className="btn btn-outline-danger">
          X
        </button>
      </div>
    </div>
  );
};

export default PhotoCard