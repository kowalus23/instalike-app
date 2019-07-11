import React from 'react';

class Photo extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <div className="card mx-3 mb-4">
        <img className="card-img-top" src={post.imageLink} alt="ownPicture"/>
          <div className="card-body">
            <p className="card-text">{post.description}</p>
            <button className="btn btn-outline-danger">Remove</button>
          </div>
      </div>
    );
  }
}

export default Photo