import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';
const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul className='ul-container'>
        <li className='nav-li'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-li'>
          <Link to='/posts'>Posts</Link>
        </li>
        <li className='nav-li'>
          <Link to='/comments'>comments</Link>
        </li>
        <li className='nav-li'>
          <Link to='/albums'>Albums</Link>
        </li>
        <li className='nav-li'>
          <Link to='/photos'>Photos</Link>
        </li>
        <li className='nav-li'>
          <Link to='/todos'>Todos</Link>
        </li>
        <li className='nav-li'>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
