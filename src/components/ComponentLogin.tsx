import React, { useState } from 'react'
import { Link } from 'wouter'

export const ComponentLogin: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle login logic here
  }

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
          <button type='submit'>login</button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
}