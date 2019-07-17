import React from 'react';

class PhotoCreate extends React.Component {
  state = {
    image: 'https://via.placeholder.com/500x350',
    text: 'Finally holidays, beautiful views...'
  };

  onSubmit = (event) => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      imageLink,
      description,
      // temporary hardcoded ID
      id: Number(new Date())
    };

    if (description && imageLink) {
      this.props.startAddingPost(post);

      this.props.onHistory.push('/')
    }
  };

  onInputImageChange = (event) => {
    this.setState({
      image: event.target.value
    })
  };

  onInputTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  };

  render() {
    return (
      <React.Fragment>
        <form className="form-custom mx-auto" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Image Link</label>
            <input
              onChange={this.onInputImageChange}
              name="link"
              type="text"
              className="form-control"
              placeholder="https://via.placeholder.com/500x350"
              autoComplete={'off'}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              onChange={this.onInputTextChange}
              name="description"
              type="text"
              className="form-control"
              placeholder="Finally holidays, beautiful views..."
              autoComplete={'off'}
            />
          </div>
          <button className="btn btn-dark w-100 mt-2 py-2">Create</button>
          <button className="btn btn-outline-secondary w-100 mt-4" type="button" data-toggle="collapse" data-target="#preview"
                  aria-expanded="false">
            Preview
          </button>
        </form>
        <div className="collapse" id="preview">
          <div className="row justify-content-center mt-3">
            <div className="col-12 col-md-8">
              <div className="card">
                <img className="card-img-top custom--comments border-bottom" src={`${this.state.image}`} alt=""/>
                <div className="card-body">
                  <div className="card-text">
                    {this.state.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PhotoCreate;