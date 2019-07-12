import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Photo = ({post, removePost, index}) => {
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
    <div className="card mx-3 mb-4" style={hover ? cardStyle.hover: null}>
      <div className="card-img-top border-bottom custom">
        <Link to={`photo/${post.id}`}>
          <img
            className="img-fluid-custom"
            src={post.imageLink.indexOf('http') ? imagePlaceholder : post.imageLink}
            alt="ownPicture"/>
        </Link>
      </div>
      <div className="card-body">
        <p className="card-text">{post.description}</p>
        <button
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onClick={() => {removePost(index)}}
          className="btn btn-outline-danger">
          X
        </button>
      </div>
    </div>
  );
};

export default Photo