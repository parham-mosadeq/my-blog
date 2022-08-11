import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/comments'>comments</Link>
        </li>
        <li>
          <Link to='/albums'>Albums</Link>
        </li>
        <li>
          <Link to='/photos'>Photos</Link>
        </li>
        <li>
          <Link to='/todos'>Todos</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
