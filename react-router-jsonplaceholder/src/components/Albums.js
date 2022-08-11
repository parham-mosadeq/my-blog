import React from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';

const Albums = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/albums');
  return (
    <div>
      <h1>Albums</h1>
      {data ? (
        data.map((album) => {
          const { id, userId, title } = album;
          return (
            <article key={id}>
              <div>
                <p>{title}</p>
              </div>
              <i>
                <Link to={`/albums/${userId}`}>band:{userId}</Link>
              </i>
            </article>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Albums;
