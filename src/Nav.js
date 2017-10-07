import React, { Component } from 'react';
import './Nav.css';
import {NavLink, Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <header>
        <NavLink exact activeClassName='active' to='/'
          style={{color: '#e0e0e0'}}>
          <h3>ERIC MA</h3>
        </NavLink>
        <nav>
          <ul className="nav">
            <li>
              <NavLink exact activeClassName='active' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <a href="https://www.docdroid.net/VJj4YR7/resume.pdf" target="_blank">
                Resume
              </a>
            </li>
            <li>
              <NavLink exact activeClassName='active' to='/portfolio'>
                Portfolio
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav
