import React from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const posts = postsKeeper();
    this.setState({
      posts: posts,
    })
  }

  removePhoto = (postRemoved) => {
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))

  };

  render() {
    return (
      <div className="container">
        <Title title="Delaygram"/>
        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
        <AddPhoto/>
      </div>
    );
  }
}

const postsKeeper = () => {
  return [
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
  ]
};

export default Main;