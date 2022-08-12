import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';

import '../css/photos.css';

const Photos = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/photos');
  const nav = useNavigate();
  useEffect(() => {
    document.title = 'Photos';
  }, []);
  return (
    <div className='photos-container'>
      <h1>Photos</h1>
      {data ? (
        data.slice(0, 40).map((photo) => {
          const { title, thumbnailUrl, url, id } = photo;
          return (
            <section className='photo-container' key={id}>
              <div className='img-container'>
                <img src={url} alt={title} />
              </div>
              <div className='info-container'>
                <div className='thumbnail-container'>
                  <img src={thumbnailUrl} alt='thumbnail' />
                </div>
                <h5>{title}</h5>
              </div>
            </section>
          );
        })
      ) : (
        <Loading />
      )}
      <button onClick={() => nav('/')}>Home</button>
    </div>
  );
};

export default Photos;
