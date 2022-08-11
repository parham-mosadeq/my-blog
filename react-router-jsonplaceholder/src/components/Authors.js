import React from 'react';
import Loading from './Loading';
import FetchData from '../FetchData';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Authors = () => {
  const nav = useNavigate();
  const loc = useLocation();
  const [data] = FetchData('https://jsonplaceholder.typicode.com/posts');
  const getUrlPathName = +loc.pathname.slice(-1);
  return (
    <div>
      {data ? <h1> The Author is: {getUrlPathName}</h1> : <Loading />}

      {data ? (
        data.map((post) => {
          const { userId, id, title, body } = post;
          if (getUrlPathName === userId) {
            return (
              <>
                <div key={id}>
                  <h3>{title}</h3>
                  <p>{body}</p>
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
