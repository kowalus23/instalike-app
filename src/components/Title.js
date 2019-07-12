import React from 'react';
import {Link} from "react-router-dom";

const Title = ({title}) => {
  return (
    <h1 className="custom py-5">
      <Link className="decoration-none" to={'/'}> {title}</Link>
    </h1>
  )
};

export default Title;