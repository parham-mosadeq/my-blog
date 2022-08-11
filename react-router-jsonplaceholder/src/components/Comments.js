import React from 'react';
import FetchData from '../FetchData';
import Loading from './Loading';

const Comments = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/comments');

  return (
    <div>
      <h1>comments</h1>
      {data ? (
        data.map((comment) => {
          const { body, email, id, name, postId } = comment;
          return (
            <div key={id}>
              <h2>{body}</h2>
              <h3>{name}</h3>
              <h4>{email}</h4>
              <i>post id is:{postId}</i>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Comments;
