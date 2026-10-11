import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Assignments } from './assignments/assignments';
import { Celebrate } from './celebrate/celebrate';
import { Notifications } from './notifications/notifications';
import { Signup } from './signup/signup';

export default function App() {
  return (
  <BrowserRouter>
    <div className="body">
        <header className="container-header">
            <nav className="navbar-fixed-top">
                <h1 className="navbar-brand-lil">Lil'</h1>
                <h1 className="navbar-brand-planner">planner</h1>
                <menu>
                <li className="nav-item">
                    <NavLink className='nav-link' to="/">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to='signup'>Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to='assignments'>Assignments</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to='notifications'>Notifications</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to='celebrate'>Celebrate</NavLink>
                </li>
                </menu>
            </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/signup' element={<Signup />} />
            <Route path='/assignments' element={<Assignments />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/celebrate' element={<Celebrate />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <footer>
        <span className="author">Genevieve Martin</span>
        <a href="https://github.com/grm77777/startup">Startup GitHub Repository</a>
        </footer>
    </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}