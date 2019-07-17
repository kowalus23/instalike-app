import React, {useState} from 'react';

const Comments = (props) => {
  const [enable, setEnable] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;

    // const date = () => {
    //   let today = new Date();
    //   const day = String(today.getDate()).padStart(2, '0');
    //   const month = String(today.getMonth() + 1).padStart(2, '0');
    //   const year = String(today.getFullYear());
    //   return `${year}-${month}-${day}`
    // };

    props.startAddingComment(comment, props.id);
    event.target.elements.comment.value = '';
  };

  const buttonEnable = (event) => {
    if (event.target.value.length > 0) {
       setEnable(false)
    } else {
      setEnable(!enable)
    }
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
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea onChange={buttonEnable} className="form-control custom--comments__area" name="comment" rows="4" placeholder="Write, a comment..."/>
          <input className="btn btn-primary w-100 custom--comments__submit" value="Add comment" type="submit" disabled={enable}/>
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