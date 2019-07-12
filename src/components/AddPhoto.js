import React from 'react';

class AddPhoto extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      imageLink,
      description,
    };

    if (description && imageLink) {
      this.props.addPost(post);
      this.props.onHistory.push('/')
    }
  };

  render() {
    return (
      <div>
        <form className="form-custom mx-auto" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Image Link</label>
            <input
              onChange={this.onInputChange}
              name="link"
              type="text"
              className="form-control"
              placeholder="https://via.placeholder.com/150"
              autoComplete={'off'}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              onChange={this.onInputChange}
              name="description"
              type="text"
              className="form-control"
              placeholder="Finally holidays, beautiful views..."
              autoComplete={'off'}
            />
          </div>
          <button className="btn btn-dark w-100 mt-2 py-2">Create</button>
        </form>
      </div>
    );
  }
}

export default AddPhoto;