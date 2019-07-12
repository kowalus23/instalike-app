import React from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import './App.css'
import { Route} from 'react-router-dom'

class App extends React.Component {
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
      screen: 'photos'
    })
  }

  removePhoto = (postRemoved) => {
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))

  };

  addPhoto = (postSubmited) => {
    this.setState(state => ({
      posts: state.posts.concat([postSubmited])
    }) )
  };

  render() {
    return (
      <div className="container">
        <Route path={'/'} exact render={() => (
          <React.Fragment>
            <Title title="Delaygram"/>
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
          </React.Fragment>
        )}/>
        <Route path={'/AddPhoto'} exact render={({history}) => (
          <AddPhoto onAddPhoto={(addedPost) => {
            this.addPhoto(addedPost);
            history.push('/')
          }} />
        )}/>
      </div>
    );
  }
}

const postsKeeper = () => {
  return [
    {
      id: 1,
      description: 'beautiful landscape',
      imageLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      description: 'Aliens???',
      imageLink: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      description: 'On a vacation!',
      imageLink: 'https://via.placeholder.com/150'
    }
  ]
};

export default App;