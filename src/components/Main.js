import React from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";

const posts = [
  {
    id: '0',
    description: 'beautiful landscape',
    imageLink: "https://via.placeholder.com/150"
  },
  {
    id: '1',
    description: 'Aliens???',
    imageLink: 'https://via.placeholder.com/150'
  },
  {
    id: '2',
    description: 'On a vacation!',
    imageLink: 'https://via.placeholder.com/150'
  }
];

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: posts,
    }
  }


  render() {
    return (
      <div className="container">
        <Title title="Delaygram"/>
        <PhotoWall posts={this.state.post}/>
      </div>
    );
  }
}

export default Main;