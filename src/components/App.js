import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from "react-redux";
import '../styles/components/App.css'
import Title from "./Title";
import PhotoList from "./PhotoList";
import PhotoCreate from "./PhotoCreate";
import PhotoDetail from "./PhotoDetail";
import {removePost, addPost} from "../actions";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title title="Delaygram"/>
        <Route path={'/'} exact render={() => (
          <React.Fragment>
            <PhotoList {...this.props}/>
          </React.Fragment>
        )}/>
        <Route path={'/create/'} exact render={({history}) => (
          <PhotoCreate {...this.props} onHistory={history}/>
        )}/>
        <Route path={'/photo/:id'} exact render={(params) => (
          <PhotoDetail {...this.props} {...params}/>
        )}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {posts: state.posts}
};

export default connect(mapStateToProps, {removePost, addPost})(App);