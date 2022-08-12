import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';
import '../css/albums.css';
const Albums = () => {
  useEffect(() => {
    document.title = 'Albums';
  }, []);
  const [data] = FetchData('https://jsonplaceholder.typicode.com/albums');
  return (
    <div className='als-container'>
      <h1>Albums</h1>
      {data ? (
        data.map((album) => {
          const { id, userId, title } = album;
          return (
            <article className='al-container' key={id}>
              <h3>{title}</h3>
              <p>Description: Lorem ipsum dolor sit.</p>
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
