import React, { useState } from 'react'
import { Link } from 'wouter'

export const ComponentRegister: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <input type="text" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
          <button type='submit'>Register</button>
          <Link to="/login">Log in</Link>
        </form>
      </div>
    </div>
  );
}