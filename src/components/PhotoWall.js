import React from 'react';
import Photo from './Photo'

class PhotoWall extends React.Component {
  renderPhoto() {
    return this.props.posts.map(post => <Photo key={post.id} post={post}/>)
  }

  render() {
    return (
      <div className="d-flex justify-content-center flex-wrap pt-5">
        {this.renderPhoto()}
      </div>
    );
  }
}

export default PhotoWall;