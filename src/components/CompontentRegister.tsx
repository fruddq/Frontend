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
    <>
    <section className="login-page">
    <article className="login-info">
      <h2 className="login-title">Login</h2>
      <p className="login-text">Please enter your credentials to login.</p>
    </article>
         <form className="login-form" onSubmit={handleSubmit}>
           <input type="text" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} />
           <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
           <input type="text" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
           <button type='submit'>Register</button>
           <Link to="/login">Log in</Link>
      </form>
    </section>
  </>   
  );
}