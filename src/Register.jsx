import React from 'react';
import { useContext, useState } from 'react';
import axios from 'axios';
import {UserContext} from './UserContext.jsx';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
  async function register(ev) {
    ev.preventDefault();
    const {data} = await axios.post('/register', { username, password });
    setLoggedInUsername(username);
    setId(data.id); //because we get the id from the response
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto" onSubmit={register}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full  rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
}
