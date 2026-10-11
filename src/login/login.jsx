import React from 'react';

export function Login() {
  return (
    <main>
      <h1 className="header">Welcome!</h1>
      <form className="login-form" method="get">
        <div>
          <input className="login" type="text" placeholder="username" />
        </div>
        <div>
          <input className="login" type="password" placeholder="password" />
        </div>
        <button id="login-button" type="submit" formaction="assignments.html">login</button>
        <div>
          <span className="main-cursive">Don't have an account?</span>
        </div>
        <button id="login-button" type="submit" formaction="signup.html">sign up!</button>
      </form>
    </main>
  );
}