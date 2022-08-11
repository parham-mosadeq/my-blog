import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';
const Artists = () => {
  const loc = useLocation();
  const nav = useNavigate();
  const getUrlPathname = +loc.pathname.slice(-1);
  const [data] = FetchData('https://jsonplaceholder.typicode.com/albums');

  return (
    <div>
      <button onClick={() => nav(-1)}>back</button>
      <h2>artist: {getUrlPathname}</h2>
      {data ? (
        data.map((album) => {
          const { id, userId, title } = album;
          if (getUrlPathname === userId) {
            return (
              <article key={id}>
                <div>
                  <h2>{title}</h2>
                  <p>
                    Description: Lorem, ipsum dolor sit amet consectetur
                    adipisicing.
                  </p>
                </div>
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
