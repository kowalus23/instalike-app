import React from 'react';

class AddPhoto extends React.Component {

  onInputChange = (event) => {
  };

  onSubmit = (event) => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };

    if (description && imageLink) {
      this.props.onAddPhoto(post)
    }
  };

  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Link</label>
            <input onChange={this.onInputChange} name="link" type="text" className="form-control" placeholder="Link"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input onChange={this.onInputChange} name="description" type="text" className="form-control" placeholder="Description"/>
          </div>
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPhoto;