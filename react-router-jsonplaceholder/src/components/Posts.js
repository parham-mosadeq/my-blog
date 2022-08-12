import React, { useEffect } from 'react';
import Loading from './Loading';
import FetchData from '../FetchData';
import { Link, useNavigate } from 'react-router-dom';
import '../css/posts.css';
const Posts = () => {
  const nav = useNavigate();
  const [data] = FetchData('https://jsonplaceholder.typicode.com/posts');
  useEffect(() => {
    document.title = 'Posts';
  }, []);
  return (
    <div className='posts-container'>
      <h1>posts</h1>

      {data ? (
        data.map((post) => {
          const { userId, id, title, body } = post;
          return (
            <div key={id} className='post-container'>
              <h3 className='posts-title'>{title}</h3>
              <p className='posts-par'>{body}</p>
              <i className='posts-link'>
                <Link to={`/posts/${userId}`} prop={userId}>
                  Author:{userId}
                </Link>
              </i>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
      <button className='posts-btn' onClick={() => nav(-1)}>
        Home
      </button>
    </div>
  );
};

export default Posts;
