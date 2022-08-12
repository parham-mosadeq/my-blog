import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';

const Photographer = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/photos');
  const loc = +useLocation().pathname.slice(-1);
  const nav = useNavigate();
  return (
    <div>
      <h1>photographer</h1>
      {data ? (
        data.slice(0, 40).map((photo) => {
          const { albumId, title, thumbnailUrl, url, id } = photo;
          if (loc === albumId) {
            return (
              <section key={id}>
                <div className='img-container'>
                  <img src={url} alt={title} />
                </div>
                <div className='info-container'>
                  <h5>{title}</h5>
                  <i>
                    albums id:
                    {albumId}
                  </i>
                </div>
                <div className='thumbnail-container'>
                  <img width='100px' src={thumbnailUrl} alt='thumbnail' />
                </div>
              </section>
            );
          } else {
            return [];
          }
        })
      ) : (
        <Loading />
      )}
      <button onClick={() => nav('/photos')}>Photos</button>
    </div>
  );
};

export default Photographer;
