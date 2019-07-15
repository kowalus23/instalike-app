import React from 'react';

const Comments = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    props.addComment(comment, props.id);
  };

  const renderComment = () => {
    return (
      props.comments.map((comment, index) => {
        return (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {comment}
            <span className="badge badge-primary badge-pill mb-auto">now</span>
          </li>
        )
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea className="form-control custom--comments__area" name="comment" rows="3" placeholder="Write, a comment..."/>
          <input className="btn btn-primary w-100 custom--comments__submit" value="Add comment" type="submit"/>
        </div>
      </form>
      <ul className="list-group custom--comments border rounded">
        {renderComment()}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, cum deserunt eum mollitia nam placeat reiciendis rem. Assumenda, dolor?
          <span className="badge badge-primary badge-pill mb-auto">yesterday</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
          <span className="badge badge-primary badge-pill mb-auto">3 days ago</span>
        </li>
      </ul>
    </div>
  )
};

export default Comments