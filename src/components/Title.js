import React from 'react';

class Title extends React.Component{
  render() {
    return (
      <React.Fragment>
        <h1 className="custom py-5">{this.props.title}</h1>
      </React.Fragment>
    );
  }
}

export default Title;