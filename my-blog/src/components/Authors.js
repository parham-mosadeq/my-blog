import React from 'react';
import Loading from './Loading';
import FetchData from '../FetchData';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/author.css';

const Authors = () => {
  const nav = useNavigate();
  const loc = useLocation();
  const [data] = FetchData('https://jsonplaceholder.typicode.com/posts');
  const getUrlPathName = +loc.pathname.slice(-1);
  return (
    <div className='auth-container'>
      {data ? <h1> The Author is: {getUrlPathName}</h1> : <Loading />}
      <button onClick={() => nav(-1)}>back to posts</button>
      {data ? (
        data.map((post) => {
          const { userId, id, title, body } = post;
          if (getUrlPathName === userId) {
            return (
              <>
                <div key={id} className='auth-info'>
                  <h3 className='auth-title'>{title}</h3>
                  <p className='auth-par'>{body}</p>
                </div>
              </>
            );
          } else {
            return [];
          }
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Authors;
