import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';
import '../css/todos.css';

const Todos = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/todos');
  const nav = useNavigate();

  useEffect(() => {
    document.title = 'Todos';
  }, []);

  return (
    <div className='todos-container'>
      <h1>Todos</h1>
      {data ? (
        data.map((todo) => {
          const { id, title, completed } = todo;
          return (
            <div key={id} className='todo-container'>
              <div className='info-container'>
                <p className={completed ? 'true' : 'false'}>{title}</p>

                <div className='todo'>
                  <span>{completed ? '✅' : '❌'}</span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}

      <button onClick={() => nav('/')}>Home</button>
    </div>
  );
};

export default Todos;
