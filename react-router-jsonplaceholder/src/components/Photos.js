import React from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';

const Photos = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/photos');
  return (
    <div>
      <h1>Photos</h1>
      {data ? (
        data.slice(0, 100).map((photo) => {
          const { albumId, title, thumbnailUrl, url, id } = photo;
          return (
            <section key={id}>
              <div className='img-container'>
                <img src={url} alt={title} />
              </div>
              <div className='info-container'>
                <h5>{title}</h5>
                <i>
                  albums id: <Link to={`/photos/${albumId}`}> {albumId}</Link>
                </i>
              </div>
              <div>
                <img width='100px' src={thumbnailUrl} alt='thumbnail' />
              </div>
            </section>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Photos;
