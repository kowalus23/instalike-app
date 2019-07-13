import React from 'react';

const Comments = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <textarea className="form-control" rows="3" placeholder="Write, a comment..."/>
          <input className="btn btn-primary w-100" value="Add comment" type="submit"/>
        </div>
      </form>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lorem ipsum dolor sit amet.
          <span className="badge badge-primary badge-pill mb-auto">today</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, cum deserunt eum mollitia nam placeat reiciendis rem. Assumenda, dolor?
          <span className="badge badge-primary badge-pill mb-auto">yesterday</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, officiis.
          <span className="badge badge-primary badge-pill mb-auto">3 days ago</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lorem ipsum dolor.
          <span className="badge badge-primary badge-pill mb-auto">4 days ago</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
          <span className="badge badge-primary badge-pill mb-auto">month ago</span>
        </li>
      </ul>
    </div>
  )
};

export default Comments