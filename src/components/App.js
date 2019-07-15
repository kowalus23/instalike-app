import React from 'react';
import {Route} from 'react-router-dom'
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
  state = {loading: true};

  componentDidMount() {
    this.props.startLoadingPosts().then(() => {
      this.setState({loading: false})
    });
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
            <PhotoDetail loading={this.state.loading} {...this.props} {...params}/>
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