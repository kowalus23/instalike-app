import React from 'react';

class Title extends React.Component{
  render() {
    return (
      <div>
        <h1 className="custom">{this.props.title}</h1>
      </div>
    );
  }
}

export default Title;