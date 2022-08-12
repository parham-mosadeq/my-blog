import React from 'react';
import { useNavigate } from 'react-router-dom';
import FetchData from '../FetchData';
import Loading from './Loading';
import '../css/users.css';
const Users = () => {
  const [data] = FetchData('https://jsonplaceholder.typicode.com/users');
  const nav = useNavigate();
  return (
    <div className='users-container'>
      <h1>Users</h1>
      {data ? (
        data.map((user) => {
          const { id, name, photo, username, website, company, address } = user;
          const { city, street, suite, zipcode } = address;
          const { bs, catchPhrase, name: companyName } = company;
          return (
            <section className='user-container' key={id}>
              <div className='personal-info'>
                <div className='profile-photo'>
                  <img src={photo} alt={name} />
                </div>
                <h1> First name: {name}</h1>
                <h2>User name: {username}</h2>
                <h3>💻 :{website}</h3>
              </div>
              <article>
                <div className='address-info'>
                  <h5>
                    🌆:
                    <span>{city}</span>
                  </h5>
                  <p>
                    🚇: <span>{street}</span>
                  </p>
                  <p>
                    📭: <span>{zipcode}</span>
                  </p>
                  <p> 🏢:{suite}</p>
                </div>
              </article>
              {/* company start */}
              <article className='company-info'>
                <p>🏭: {companyName}</p>
                <p>🅱: {bs}</p>
                <p>🦜: {catchPhrase}</p>
              </article>
              {/* company end */}
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

export default Users;
