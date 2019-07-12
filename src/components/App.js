import React from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import './App.css'
import { Route} from 'react-router-dom'
import {connect} from "react-redux";
import {removePost} from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.removePost();
  }

  render() {
    return (
      <div className="container">
        <Route path={'/'} exact render={() => (
          <React.Fragment>
            <Title title="Delaygram"/>
            <PhotoWall {...this.props}/>
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

const mapStateToProps = state => {
  return {posts: state.posts}
};

export default connect(mapStateToProps, {removePost})(App);