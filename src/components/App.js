import React from 'react';
import {Route, Link} from 'react-router-dom'
import {connect} from "react-redux";
import '../styles/components/App.css'
import Title from "./Title";
import PhotoList from "./PhotoList";
import PhotoCreate from "./PhotoCreate";
import PhotoDetail from "./PhotoDetail";
import {
  startAddingComment,
  startAddingPost,
  startLoadingPosts,
  startRemovingPost,
  startLoadingComments
} from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.startLoadingPosts();
    this.props.startLoadingComments();
  }

  render() {
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
          <React.Fragment>
            <Link className="return-button btn btn-primary" to={'/'}><i className="fas fa-arrow-left "/></Link>
            <PhotoDetail {...this.props} {...params}/>
          </React.Fragment>
        )}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {posts: state.posts, comments: state.comments}
};

export default connect(mapStateToProps,
  {
    startAddingComment,
    startAddingPost,
    startLoadingPosts,
    startRemovingPost,
    startLoadingComments,
  })(App);