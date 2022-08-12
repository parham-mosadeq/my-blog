import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';
import '../css/artist.css';
const Artists = () => {
  const loc = useLocation();
  const nav = useNavigate();
  const getUrlPathname = +loc.pathname.slice(-1);
  const [data] = FetchData('https://jsonplaceholder.typicode.com/albums');

  return (
    <div className='artists-container'>
      <button className='btn' onClick={() => nav(-1)}>
        back
      </button>
      <h2>artist: {getUrlPathname}</h2>
      {data ? (
        data.map((album) => {
          const { id, userId, title } = album;
          if (getUrlPathname === userId) {
            return (
              <article className='artist-container' key={id}>
                <h2>{title}</h2>
                <p>
                  Description: Lorem, ipsum dolor sit amet consectetur
                  adipisicing.
                </p>
              </article>
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

export default Artists;
