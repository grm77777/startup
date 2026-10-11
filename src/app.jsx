import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div className="body bg-dark text-light">
    <header class="container-header">
        <nav class="navbar-fixed-top">
            <h1 class="navbar-brand-lil">Lil'</h1>
            <h1 class="navbar-brand-planner">planner</h1>
            <menu>
            <li class="nav-item">
                <a class="nav-link-active" href="index.html">Home</a></li>
            <li class="nav-item">
                <a class="nav-link" href="signup.html">Sign Up</a></li>
            <li class="nav-item">
                <a class="nav-link" href="assignments.html">Assignments</a></li>
            <li class="nav-item">
                <a class="nav-link" href="notifications.html">Notifications</a></li>
            <li class="nav-item">
                <a class="nav-link" href="celebrate.html">Celebrate</a></li>
            </menu>
        </nav>
    </header>

    <footer>
    <span class="author">Genevieve Martin</span>
    <a href="https://github.com/grm77777/startup">Startup GitHub Repository</a>
    </footer>
  </div>
  );
}