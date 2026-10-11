import React from 'react';

export function Signup() {
  return (
    <main>
      <h1 className="header">Sign Up!</h1>
      <form className="login-form" method="get">
        <div>
          <input className="login" type="text" placeholder="username" />
        </div>
        <div>
          <input className="login" type="password" placeholder="password" />
        </div>
        <button id="login-button" type="submit" formaction="assignments.html">create</button>
      </form>
    </main>
  );
}