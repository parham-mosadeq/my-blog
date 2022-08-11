import React from 'react';
import Loading from './Loading';
import FetchData from '../FetchData';
import { Link, useNavigate } from 'react-router-dom';

const Posts = () => {
  const nav = useNavigate();
  const [data] = FetchData('https://jsonplaceholder.typicode.com/posts');
  return (
    <div>
      <h1>posts</h1>
      <button onClick={() => nav(-1)}>
        go back <span>one step</span>
      </button>

      {data ? (
        data.map((post) => {
          const { userId, id, title, body } = post;
          return (
            <div key={id}>
              <h3>{title}</h3>
              <p>{body}</p>
              <i>
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
    </div>
  );
};

export default Posts;
