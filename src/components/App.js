import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from "react-redux";
import '../styles/components/App.css'
import Title from "./Title";
import PhotoList from "./PhotoList";
import PhotoCreate from "./PhotoCreate";
import PhotoDetail from "./PhotoDetail";
import {removePost, addPost, addComment} from "../actions";

class App extends React.Component {
  render() {
    console.log(this.props.comments)
    return (
      <div className="container">
        <Title title="Delaygram"/>
        <Route path={'/'} exact render={() => (
          <React.Fragment>
            <PhotoList {...this.props}/>
          </React.Fragment>
        )}/>
        <Route path={'/create/'} exact render={() => (
          <PhotoCreate {...this.props} />
        )}/>
        <Route path={'/photo/:id'} exact render={(params) => (
          <PhotoDetail {...this.props} {...params}/>
        )}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {posts: state.posts, comments: state.comments}
};

export default connect(mapStateToProps, {removePost, addPost, addComment})(App);