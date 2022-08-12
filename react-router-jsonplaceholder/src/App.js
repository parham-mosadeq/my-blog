import React from 'react';
import { Routes, Route } from 'react-router-dom';
// importing route pages
import HomePage from './components/HomePage';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Albums from './components/Albums';
import Photos from './components/Photos';
import Todos from './components/Todos';
import Users from './components/Users';
import Authors from './components/Authors';
import Artists from './components/Artists';
import Photographer from './components/Photographer';
// importing navbar (contained Links)
import Navbar from './Navbar';
// importing custom hook to fetch data
import FetchData from './FetchData';

// css
import './css/global.css';

const App = () => {
  return (
    <div>
      <FetchData />
      <Navbar />
      {/* routes start */}
      <Routes>
        {/* main route */}
        <Route path='/' element={<HomePage />} />
        {/* main route */}

        {/* posts start */}
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:authors' element={<Authors />} />
        {/* posts end */}

        {/* comments start */}
        <Route path='/comments' element={<Comments />} />
        {/* comments end */}

        {/* albums start */}
        <Route path='/albums' element={<Albums />} />
        <Route path='/albums/:artist' element={<Artists />} />
        {/* albums end */}

        {/* photos start */}
        <Route path='/photos' element={<Photos />} />
        <Route
          path='/photos/photographer/:photographerId'
          element={<Photographer />}
        />
        {/* photos end */}

        {/* todos start */}
        <Route path='/todos' element={<Todos />} />
        {/* todos end */}

        {/* users start */}
        <Route path='/users' element={<Users />} />
        {/* users end */}
      </Routes>
      {/* routes end */}
    </div>
  );
};

export default App;
