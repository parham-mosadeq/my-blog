import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';
import '../css/comments.css';

const Comments = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/comments');
  const nav = useNavigate();
  useEffect(() => {
    document.title = 'Comments';
  }, []);
  return (
    <div className='coms-container'>
      <h1> comments</h1>
      {data ? (
        data.map((comment) => {
          const { body, email, id, name, postId } = comment;
          return (
            <div key={id} className='com-container'>
              <h2 className='com-body'>{body}</h2>
              <h3 className='com-name'>{name}</h3>
              <h4 className='com-email'>{email}</h4>
              <i className='com-id'>post's id is:{postId}</i>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
      <button className='home-btn' onClick={() => nav('/')}>
        Home
      </button>
    </div>
  );
};

export default Comments;
