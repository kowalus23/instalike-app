import React from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import './App.css'
import {Route} from 'react-router-dom'
import {connect} from "react-redux";
import {removePost, addPost} from "../actions";

class App extends React.Component {
  render() {
    return (
      <div className="container">
       <Title title="Delaygram"/>
        <Route path={'/'} exact render={() => (
          <React.Fragment>
            <PhotoWall {...this.props}/>
          </React.Fragment>
        )}/>
        <Route path={'/AddPhoto'} exact render={({history}) => (
          <AddPhoto {...this.props} onHistory={history}/>
        )}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {posts: state.posts}
};

export default connect(mapStateToProps, {removePost, addPost})(App);